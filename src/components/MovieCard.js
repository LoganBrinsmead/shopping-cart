/**
 * card for the cars, that you can click and add to cart
 * or potentially in future update, go to the page of
 * that car and read a short description there
 * (full page is of that car)
 */
import React from "react";
import { Button, Card } from 'react-bootstrap';
import { useState } from "react";

export default function CarCard(props) {

    /**
     * could use useEffect to have it say
     * car is in cart
     * once you add it to your cart and click the button
     */

    // TODO: increment count in shopping cart for total items
    // TODO: pass this state as props to cart component

    return (
        <>
        <Card>
            <Card.Img variant="top" src={ props.MovieImage } />
            <Card.Body>
                <Card.Title> { props.MovieTitle } </Card.Title>
                <Card.Text> { props.MovieDescription } </Card.Text>
                <h4> { props.MovieDirector } </h4>
                <Button onClick={ props.handleCountInCart }>Add to Cart</Button>
                <Button>Remove from Cart</Button>
            </Card.Body>
        </Card>
        </>
    )

}