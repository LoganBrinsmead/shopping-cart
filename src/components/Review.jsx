import react from "react";
import Container from 'react-bootstrap';

export default function Review() {

    return (
        <>
            <Container className="review">
                <h3 className="reviewTitle"> { props.reviewTitle } </h3>
                <h4 className="reviewUsername"> { props.reviewUsername } </h4>
                <span className="stars"> { props.stars } </span>
                <Container className="reviewText"> { props.reviewText } </Container>
            </Container>
        </>
    )
}