import React from "react";
import Thumbnail from "../Thumbnail";
import Button from "../Button"
import { Container, Row, Col } from "../Grid";
import "./style.css";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item


export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
  
  title,
  author,
  description,
  image,
  link

}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image || "https://placehold.it/300x300"} />
          </Col>
          <Col size="xs-8 sm-9">
            <div style={{float:"right"}}>
                  <a href={link} class="btn btn-sucess btn-lg active mr-3" role="button" aria-pressed="true">View</a>

                    <Button
                      onClick={link}
                      type="success"
                      className="input-lg"
                    >
                        Save
                    </Button>
            </div>
            <h3>{title}</h3>
            <p> {author}</p>
            <p> {description}</p>
             
          </Col>
        </Row>
      </Container>
    </li>
  );
}
