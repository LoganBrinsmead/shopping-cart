import { useEffect, useState } from "react";
import { Image, Stack, Container } from 'react-bootstrap';

const ShoppingCart = (props) => {

    const [totalPrice, setTotalPrice] = useState(0);


    const getTotalPrice = () => {
        return props.cart.reduce((acc, item) => {
            return acc += item.price;
        }, 0);
    }

    const getIndividualTotalPrice = () => {
        return props.cart.map(item => {
            item["TotalPrice"] = item.quantity * item.price;
        });
    }

    const handleAmountDecrement = (movieTitle) => {
        props.setCart(cart => {
            cart.map((item) => {
                item.title = movieTitle ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) } : item
            })
        })
    }

    const handleAmountIncrement = (movieTitle) => {
        props.setCart(cart => {
            cart.map((item) => {
                item.title = movieTitle ? { ...item, quantity: item.quantity + 1 } : item
            })
        })
    }

    useEffect(() => {
        setTotalPrice(getTotalPrice());
        getIndividualTotalPrice();
     });

    console.log(props.cart)             // TODO: remove
     
    return (
        <>
            <div className="shoppingCart">
                <h1>Shopping Cart</h1>
                <Container className="cartItems">
                    <h3>{`Total value in cart: ${totalPrice}`}</h3>
                    <Stack gap={3}>
                        {
                            props.cart.map(movie => {
                                return (
                                    <div className="cartItem">
                                        <div className="itemDescription">
                                            <Image thumbnail={true} fluid={true} href={movie.image} />
                                            <h3>{movie.title}</h3>
                                            <h6> {`$${movie.price}`} </h6>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Stack>
                </Container>
            </div>
        </>
    )
}

export default ShoppingCart