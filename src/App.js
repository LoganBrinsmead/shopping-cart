import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {

  let stuff = [
  { i: 0, genre: 'rock'}, 
  { i: 1, genre: 'pop' }, 
  { i: 2, genre: 'espanol' },
  { i: 3, genre:'yeerr' }
]

  return (
    <div>
      <Header />
      <Sidebar genres={stuff} />
    </div>
  )
}

export default App;
