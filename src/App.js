import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import logo from "./components/logo.png";
import MovieCard from './components/MovieCard';
import './App.css';

const App = () => {

  const [countInCart, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  const handleCountInCart = (item) => {
    // setCart(...cart, {  })
    setCount(countInCart + 1);
  };

  let stuff = [
    { i: 0, genre: 'rock' },
    { i: 1, genre: 'pop' },
    { i: 2, genre: 'espanol' },
    { i: 3, genre: 'yeerr' }
  ]

  let movies = [
    { i: 0, MovieImage: logo, MovieTitle: "BladeRunner", MovieDescription: "AWESOMEST MOVIE EVER", MovieDirector: "Logey Brinsmead" },
    { i: 1, MovieImage: logo, MovieTitle: "BladeRunner", MovieDescription: "AWESOMEST MOVIE EVER", MovieDirector: "Logey Brinsmead" },
    { i: 2, MovieImage: logo, MovieTitle: "BladeRunner", MovieDescription: "AWESOMEST MOVIE EVER", MovieDirector: "Logey Brinsmead" },
    { i: 3, MovieImage: logo, MovieTitle: "BladeRunner", MovieDescription: "AWESOMEST MOVIE EVER", MovieDirector: "Logey Brinsmead" }

  ]

  return (
    <div>
      <Header countInCart={countInCart} />
      <div className="body-wrapper">
        <Sidebar genres={stuff} />
        <div className="content">
          {movies.map((movie) => {
            return (
              <MovieCard
                key={movie.i}
                MovieImage={movie.MovieImage}
                MovieTitle={movie.MovieTitle}
                MovieDescription={movie.MovieDescription}
                MovieDirector={movie.MovieDirector}
                handleCountInCart={ handleCountInCart }
              />
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default App;
