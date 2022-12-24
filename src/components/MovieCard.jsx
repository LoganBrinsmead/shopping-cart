
import { useEffect } from "react";
import {Card, Button} from "react-bootstrap";

const MovieCard = (props) => {

    return (
        <>
            <Card>
                <Card.Img variant="top" className="MovieImage" src={props.MovieImage} />
                <Card.Body>
                    <Card.Title> {props.MovieTitle} </Card.Title>
                    <Card.Text> {props.MovieGenre} </Card.Text>
                    <h4> {props.MovieDirector} </h4>
                    <Button onClick={() => {
                        props.setCount;
                        props.setCart(props.movie);
                        }}>
                            Add to Cart
                            </Button>
                    <Button>Remove from Cart</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default MovieCard;