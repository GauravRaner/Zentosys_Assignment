// frontend/src/App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import AddMovie from './components/AddMovie';

const App = () => {
  const [moviesUpdated, setMoviesUpdated] = useState(false);

  const handleMovieAdded = () => {
    setMoviesUpdated(!moviesUpdated);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddMovie onMovieAdded={handleMovieAdded}/>}/>
          <Route path='allMovies' element={<MovieList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
