import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Menubar from './pages/Menubar';
import Movie from './pages/Movie';
const App = () => {
  return <Routes>
    <Route path="/" element={<Menubar/>}>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/movies" element={<Movies/>}>
        <Route path=":movieID" element={<Movie/>}></Route>
      </Route>
    </Route>
    <Route path="*"  element={<div>404 Not Found</div>}/>
  </Routes>;
};

export default App;