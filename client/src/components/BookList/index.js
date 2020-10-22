import React, { useState }  from "react";
import Thumbnail from "../Thumbnail";
import Button from "../Button";
import API from "../../utils/API";
import { Container, Row, Col } from "../Grid";
import "./style.css";

function BookList(props) {

  const [inputValue, setInputValue] = useState([]);
  const [setError] = useState([]);

  const saveBook = () => {
    // console.log(inputValue);
    API.saveBook(inputValue)
    .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data);
        }
        setInputValue(res.data);
      })
      .catch(err => setError({ error: err.message }));;
  };
  
  function deleteBooks(id) {
    // Add code here to get all books from the database and store them using setBooks
 
    API.deleteBook(id).then((response) => {
      loadBooks();
    });

  }

  function loadBooks() {
    // Add code here to get all books from the database and store them using setBooks
 
    API.getBooks().then((response) => {
      setInputValue(response.data);
    });
  }

  
  return (
    <ul className="list-group">

  {props.books.map(singleBook => (
    <div>
    <li className="list-group-item" key={singleBook.id}>
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={singleBook.volumeInfo.imageLinks.thumbnail || "https:placehold.it/300x300"} />
          </Col>
          <Col size="xs-8 sm-9">
           
            <h3>{singleBook.volumeInfo.title}</h3>
            <p> {singleBook.volumeInfo.author}</p>
            <p> {singleBook.volumeInfo.description}</p>
             
          <div style={{float:"right"}}>
            <a href={singleBook.volumeInfo.infoLink} class="btn btn-sucess btn-lg active mr-3" role="button" target="_blank" aria-pressed="true">View</a>

           
            <Button
              onClick={() => {
              // console.log(value);
              const v = {
                title :singleBook.volumeInfo.title,
                author : singleBook.volumeInfo.authors,
                description : singleBook.volumeInfo.description,
                image : singleBook.volumeInfo.imageLinks.thumbnail,
                link : singleBook.volumeInfo.infoLink
              }
              setInputValue(v)
              {props.option === 'saveBook' ? saveBook() : deleteBooks(singleBook.id)}
              
              }}
              type="success"
              className="input-lg"
            >
              {props.option === 'saveBook' ? "Save" : "Delete"}
            </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </li>
    </div>
  ))}
    
  </ul>
  );
}

export default BookList;
