import React, { useState, useEffect, useRef } from "react";
import DeleteBtn from "../components/DeleteBtn";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";


function Books() {
  // Initialize books as an empty array
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState([]);
    const [results , setResults] = useState([]);
    const [error , setError] = useState([]);
    const searchTitle = useRef();
    
    useEffect(() => {
      loadBooks();
    }, []);

   const handleInputChange = event => {
     const { value } = event.target;
     setSearch(value);
    };

    const handleFormSubmit = event => {
      event.preventDefault();
      console.log("Search" +search);
      API.getGoogleBooks(search)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error(res.data);
          }
          console.log(res);
         setResults(res.data);
         setBooks(res.data);
        })
        .catch(err => setError({ error: err.message }));
    };

    function loadBooks() {
      // Add code here to get all books from the database and store them using setBooks
   
      API.getBooks().then((response) => {
        setBooks(response.data);
      });
  
    }

    function deleteBooks(id) {
      // Add code here to get all books from the database and store them using setBooks
   
      API.deleteBook(id).then((response) => {
        loadBooks();
      });
  
    }

    function saveBook() {
      // Add code here to get all books from the database and store them using setBooks
    const bookData = {
        //  title : titleRef.current.value,
        //  author : authorRef.current.value,
        //  synopsis : synopsisRef.current.value
    }
      API.saveBook(bookData).then((response) => {
        setBooks(response.data);
       alert()
      });
  
    }

    return (
      <div>
            <form>
              <Input name="title" placeholder="Book Name (required)" value={search} inputarea= {searchTitle}  onChange={handleInputChange}/>
              <FormBtn onClick={handleFormSubmit} />
            </form >
          
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn onClick = {() => deleteBooks(book._id)}/>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </div>
    );
  }

export default Books;
