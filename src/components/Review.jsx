import Container from 'react-bootstrap';

const Review = () => {

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

export default Review;