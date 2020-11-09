import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import Nav from "../components/Nav"
import BookList from "../components/BookList/index"
import API from "../utils/API";
import RetrieveSavedBooks from "../components/BookList/RetrieveSavedBooks"


function SavedBooks() {
  // Initialize books as an empty array
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
      loadBooks();
    }, []);

  
    function loadBooks() {
      // Add code here to get all books from the database and store them using setBooks
   
      API.getBooks().then((response) => {
        setBooks(response.data);
      });
  
    }

    return (
      <div>

      <Nav />
      {/* <Jumbotron />
      <Container> */}
 
        <Row>
          <Col size="xs-12">
            <h1>Saved Books</h1>
            {!books.length ? (
              <h1 className="text-center">No Books to Display</h1>
            ) : (
              <RetrieveSavedBooks books= {books} option="deleteBook"/>

            )}
          </Col>
        </Row>
      {/* </Container> */}
    </div>
     
    );
  }

export default SavedBooks;
