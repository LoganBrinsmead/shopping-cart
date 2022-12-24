import Image from 'react-bootstrap/Image';
import Review from './Review';

export default function ProductPage(props) {
    return (
        <>
            <Container className="product">
                <Image src={props.MovieImage}></Image>
                <Container className="productText">
                    <h1 className="productTitle">{props.title}</h1>
                    <h2 className="productDirectorName">{props.director_name}</h2>
                    <h3 className="productCelebrity">{props.celebrity}</h3>
                    <h3 className="productGenre">{props.genre}</h3>
                    <span className="productAvgStars">{props.averageStars}</span>
                </Container>
            </Container>
            <Container className="reviewsContainer">
                {props.reviews.map((item) =>
                    <Review
                        key={item.uID}
                        title={item.title}
                        director_name={item.director_name}
                        date={item.date}
                        stars={item.stars}
                        text={item.text}
                    />)}
            </Container>
        </>
    )
}