import React, { useState, useEffect, useRef } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

import API from "../utils/API"

function Books() {
  // Initialize books as an empty array
    const [books, setBooks] = useState([]);
    const titleRef = useRef();
    const authorRef = useRef();
    const synopsisRef =useRef();
    
    useEffect(() => {
      loadBooks();
    }, []);

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
         title : titleRef.current.value,
         author : authorRef.current.value,
         synopsis : synopsisRef.current.value
    }
      API.saveBook(bookData).then((response) => {
        setBooks(response.data);
       alert()
      });
  
    }

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" inputarea= {titleRef}/>
              <Input name="author" placeholder="Author (required)" inputarea= {authorRef}/>
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" textarea={synopsisRef}/>
              <FormBtn onClick={() => saveBook()}>Submit Book </FormBtn>
            </form >
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
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
          </Col>
        </Row>
      </Container>
    );
  }

export default Books;
