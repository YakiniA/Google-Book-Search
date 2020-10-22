import React, { useState, useRef } from "react";
import { Input } from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import Nav from "../components/Nav"
import Button from "../components/Button"
import BookList from "../components/BookList"
import API from "../utils/API";


function Books() {
  // Initialize books as an empty array
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState([]);
    // const [results , setResults] = useState([]);
    const [setError] = useState([]);
    const searchTitle = useRef();
    
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
              <BookList books= {books} option="saveBook"/>

            )}
          </Col>
        </Row>
      </Container>
    </div>
     
    );
  }

export default Books;
