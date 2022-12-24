import React, { useEffect, useState } from 'react';
import RouteSwitch from "./RouteSwitch";
import axios from 'axios';
import './App.css';

const App = () => {

  ///// STATE /////////
  const [countInCart, setCount] = useState(0);
  const [moviesArray, setMovies] = useState([]);
  const [genresArray, setGenres] = useState([]);
  const [cart, setCart] = useState([]);

  ///// API CALLS //////
  async function loadMovies() {
    const promise = await axios.get("http://127.0.0.1:8081/api/v1/movie/");
    const status = promise.status;
    if (status === 200) {
      const data = promise.data;
      data.forEach(el => {
        el["quantity"] = 0;
      });
      setMovies(data);
    }
  }

  async function getGenres() {
    const promise = await axios.get("http://127.0.0.1:8081/api/v1/movie/genres");
    const status = promise.status;
    if (status === 200) {
      const data = promise.data;
      setGenres(data);
    }
  }

  /////// STATE FUNCTIONS //////
  // adding item to cart
  // TODO: check this works
  const addItemToCart = item => {
    let updateObj = cart.find(cartItem => cartItem.title === item.title)
    if(updateObj) {
      const updatedObj = {...updateObj, quantity: quantity + 1}
      setCart(
        ...cart, 
        updatedObj
      );
    } else {
      setCart(
        ...cart, 
        item
      );
    }
    
  }

  // incrementing the count in the cart
  setCount(countInCart + 1);

  ////// USEEFFECT ////////
  useEffect(() => {
    const controller = new AbortController();
    loadMovies();
    getGenres();

    return () => controller.abort();      // TODO: check if cleanup works
  }, [])

  // TODO: setCart needs to be passed as props and/or isnt populating items correctly

  return (
    <>
      <RouteSwitch
        shoppingCart={cart}
        countInCart={countInCart}
        moviesArray={moviesArray}
        genresArray={genresArray}
        setCount={setCount}
      />
    </>
  )
}

export default App;
