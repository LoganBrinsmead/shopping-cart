/**
 * card for the cars, that you can click and add to cart
 * or potentially in future update, go to the page of
 * that car and read a short description there
 * (full page is of that car)
 */
import React from "react";
import { Button } from 'react-bootstrap';

export default function CarCard(props) {

    /**
     * could use useEffect to have it say
     * car is in cart
     * once you add it to your cart and click the button
     */

    // TODO: increment count in shopping cart for total items
    // TODO: pass this state as props to cart component
    const [countInCart, setCount] = useState(0);

    return (
        <>
        <img src={ props.CarImage } alt="A picture of the car."></img>
        <h2> { props.CarName } </h2>
        <h4> { props.Make } </h4>
        <p> { props.CarDescription } </p>
        <Button onClick={ () => setCount(countInCart + 1) }></Button>
        </>
    )

}