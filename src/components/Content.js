import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Content() {
  return (
    <>
      <div className="content">
        <div className="cards">
          {props.cards.map((card) => {
            <Card key={card.count}>
              <Card.Img variant="top" src={card.image}></Card.Img>
              <Card.Body>
                <Card.Title>{card.movieTitle}</Card.Title>
                <Card.Text> {card.stars} </Card.Text>
                <Button variant="primary">Add to Cart</Button>
                <Button variant="secondary">Remove From Cart</Button>
              </Card.Body>
            </Card>;
          })}
          ;
        </div>
      </div>
    </>
  );
}
