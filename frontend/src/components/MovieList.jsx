import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Rating from "./Rating";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/movies");
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies(); 
  }, []);

  return (
    <div className="mx-auto my-3 max-w-screen-xl px-4">
      <div className="flex justify-between items-center px-10 mb-4">
        <h2 className="text-black font-semibold text-lg">All Movies</h2>
        <Link to="/" className=" ">
          <h3 className="text-white bg-[#ef6d6d] px-3 py-1 rounded-md shadow-md">
            Add Movie
          </h3>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div
            key={movie._id}
            className="border-[0.5px] overflow-hidden border-blue-400 p-4 rounded-md shadow-md bg-[#ffffff] w-full hover:scale-[1.1] transition-transform duration-200"
          >
            <h3 className="font-bold text-[#213ca9] text-xl">{movie.title}</h3>
            <p className="text-[14px]">
              About:{" "}
              <span className="text-blue-600 text-sm">{movie.description}</span>
            </p>
            <p className="text-[14px]">
              Director:{" "}
              <span className="text-blue-600 text-[15px]">{movie.director}</span>
            </p>
            <p className="text-[14px]">
              Genre:{" "}
              <span className="text-blue-600 text-[15px]">{movie.genre}</span>
            </p>
            <p className="text-[14px]">
              Year:{" "}
              <span className="text-blue-600 text-[15px]">{movie.year}</span>
            </p>
            <div className="flex justify-start items-center gap-2 text-[14px]">
              Rating:
              {movie.rating !== null ? (
                <span className="flex items-center">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={
                        index < movie.rating ? "text-yellow-500" : "text-gray-300"
                      }
                    />
                  ))}
                </span>
              ) : (
                " Not rated yet"
              )}
            </div>{" "}
            <Rating
              movieId={movie._id}
              onRatingAdded={() => fetchMovies()}
              rated={movie.rating !== null}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
