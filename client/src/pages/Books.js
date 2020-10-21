import React, { useState, useEffect, useRef } from "react";
import { Input, TextArea, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import Nav from "../components/Nav"
import Button from "../components/Button"
import { BookList, BookListItem } from "../components/BookList"
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
          
         setBooks(res.data.items);
         console.log(res.data.items);
       
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

      <Nav />
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="title"
                      value={search}
                      onChange={handleInputChange}
                      placeholder="Book Name (required)"
                      inputarea= {searchTitle} 
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            <h1>Book Search Results</h1>
            {!books.length ? (
              <h1 className="text-center">No Books to Display</h1>
            ) : (
              <BookList>
                {books.map(singleBook => {
                  // console.log(singleBook);
                  return (
                    <BookListItem
                      key={singleBook.id}
                      title={singleBook.volumeInfo.title}
                      author={singleBook.volumeInfo.authors}
                      description = {singleBook.volumeInfo.description}
                      image={singleBook.volumeInfo.imageLinks.thumbnail}
                      link={singleBook.volumeInfo.infoLink}
                     
                    />
                  );
                })}
              </BookList>
            )}
          </Col>
        </Row>
      </Container>
    </div>
     
    );
  }

export default Books;
