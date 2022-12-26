import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";

const RouteSwitch = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home
                    shoppingCart={props.shoppingCart}
                    countInCart={props.countInCart}
                    moviesArray={props.moviesArray}
                    genresArray={props.genresArray}
                    setCount={props.setCount}
                    setCart={props.setCart}
                    addItemToCart={props.addItemToCart} />} />
                <Route path="/shoppingcart" element={<ShoppingCart
                    cart={props.shoppingCart} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;