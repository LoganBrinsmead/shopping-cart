import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import logo from "./components/logo.png";
import MovieCard from './components/MovieCard';
import axios from 'axios';
import './App.css';

const App = () => {

  async function loadMovies() {
    const promise = await axios.get("http://127.0.0.1:8081/api/v1/movie/");
    const status = promise.status;
    if (status === 200) {
      const data = promise.data;
      setMoviesArray(data);
    }
  }


  useEffect(() => {
    loadMovies();
  }, [])

  const [countInCart, setCount] = useState(0);
  const [moviesArray, setMoviesArray] = useState([]);
  const [cart, setCart] = useState([]);

  const handleCountInCart = (item) => {

    // adding an item to the cart
    setCart(...cart, { i: 0, MovieImage: logo, MovieTitle: "BladeRunner", MovieDescription: "AWESOMEST MOVIE EVER", MovieDirector: "Logey Brinsmead" });

    // incrementing the count in the cart
    setCount(countInCart + 1);
  };

  let stuff = [
    { i: 0, genre: 'rock' },
    { i: 1, genre: 'pop' },
    { i: 2, genre: 'espanol' },
    { i: 3, genre: 'yeerr' }
  ]

  let exampleMovies = [
    { i: 0, MovieImage: logo, MovieTitle: "BladeRunner", MovieDescription: "AWESOMEST MOVIE EVER", MovieDirector: "Logey Brinsmead" },
    { i: 1, MovieImage: logo, MovieTitle: "BladeRunner", MovieDescription: "AWESOMEST MOVIE EVER", MovieDirector: "Logey Brinsmead" },
    { i: 2, MovieImage: logo, MovieTitle: "BladeRunner", MovieDescription: "AWESOMEST MOVIE EVER", MovieDirector: "Logey Brinsmead" },
    { i: 3, MovieImage: logo, MovieTitle: "BladeRunner", MovieDescription: "AWESOMEST MOVIE EVER", MovieDirector: "Logey Brinsmead" },
    { i: 4, MovieImage: logo, MovieTitle: "BladeRunner", MovieDescription: "AWESOMEST MOVIE EVER", MovieDirector: "Logey Brinsmead" },
    { i: 5, MovieImage: logo, MovieTitle: "BladeRunner", MovieDescription: "AWESOMEST MOVIE EVER", MovieDirector: "Logey Brinsmead" },
    { i: 6, MovieImage: logo, MovieTitle: "BladeRunner", MovieDescription: "AWESOMEST MOVIE EVER", MovieDirector: "Logey Brinsmead" },

    { i: 7, MovieImage: logo, MovieTitle: "BladeRunner", MovieDescription: "AWESOMEST MOVIE EVER", MovieDirector: "Logey Brinsmead" }

  ]


  return (
    <div>
      <div className="app">
        <Header countInCart={countInCart} />
        <div className="body-wrapper">
          <Sidebar genres={stuff} />
          <div className="content">
            {moviesArray.map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  MovieImage={movie.image}
                  MovieTitle={movie.title}
                  MovieDescription={"Placeholder"}
                  MovieDirector={movie.director_name}
                  handleCountInCart={handleCountInCart}
                />
              )
            })}

          </div>
        </div>

      </div>
    </div>
  )
}

export default App;
