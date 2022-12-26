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

  function addItemToCart(item) {
    let quantity = 1;
    console.log(cart);
    setCount(countInCart + 1);
    const update = cart.map(cartItem => {
      if(cartItem.title === item.title) {
        let quantity = cartItem.quantity + 1
        return {...cartItem, quantity: quantity};
      } else {
        return cartItem;
      }
    });
    for (let cartItem of cart) {
      if (cartItem.title === item.title) {
        return setCart( update);
      }
    }
    item.quantity = quantity;
    return setCart( current =>[ ...current, item]);


  }

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
        addItemToCart={addItemToCart}
      />
    </>
  )
}

export default App;
