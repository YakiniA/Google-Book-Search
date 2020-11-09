import React, { useState, useEffect }  from "react";
import Thumbnail from "../Thumbnail";
import Button from "../Button";
import API from "../../utils/API";
import { Container, Row, Col } from "../Grid";
import "./style.css";

function RetrieveSavedBooks(props) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(props.books);
      }, []);

    function deleteBooks(id) {
        // Add code here to get all books from the database and store them using setBooks
     console.log("Delete id");
     console.log(id);
        API.deleteBook(id).then((response) => {
          loadBooks();
        });
    
      }

      function loadBooks() {
        // Add code here to get all books from the database and store them using setBooks
     
        API.getBooks().then((response) => {
          setBooks(response.data);
        });
      }
    
      return (
        <ul className="list-group">
    
      {books.map(singleBook => (
        <div>
        <li className="list-group-item" key={singleBook._id}>
          <Container>
            <Row>
              <Col size="xs-4 sm-2">
                <Thumbnail src={singleBook.image || "https:placehold.it/300x300"} />
              </Col>
              <Col size="xs-8 sm-9">
               
                <h3>{singleBook.title}</h3>
                <p> {singleBook.author}</p>
                <p> {singleBook.description}</p>
         
                <Button
                  onClick={() => {
                
                  deleteBooks(singleBook._id)
                  }}
                  type="success"
                  className="input-lg"
                >
                  {/* {props.option === 'saveBook' ? "Save" : "Delete"} */}
                  Delete
                </Button>
              
              </Col>
            </Row>
          </Container>
        </li>
        </div>
      ))}
        
      </ul>
      );
}

export default RetrieveSavedBooks;