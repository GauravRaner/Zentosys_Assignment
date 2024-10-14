import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AddMovie = ({ onMovieAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!title || !description || !year || !director || !genre){
      toast.error("All fields are required")
    }
    try {
      await axios.post("http://localhost:8000/api/movies", {
        title,
        description,
        year,
        director,
        genre,
      });
      setTitle("");
      setDescription("");
      setDirector("");
      setYear("");
      setGenre("");
      navigate("allMovies");
      toast.success("Movie added successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="text-center border-blue-400 border-[0.5px] px-8 py-4 my-3 rounded-md shadow-lg flex flex-col gap-4 max-w-sm w-full mx-4 mt-12"
        >
          <h2 className="text-lg font-bold text-blue-500">Add New Movie</h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="input input-bordered input-accent w-full border-[0.5px] border-[#46c2e0] placeholder:px-1 py-2 rounded-md px-3"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input input-bordered input-accent w-full border-[0.5px] border-[#46c2e0] placeholder:px-1 py-2 rounded-md px-3"
          />
          <input
            type="number"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="input input-bordered input-accent w-full border-[0.5px] border-[#46c2e0] placeholder:px-1 py-2 rounded-md px-3"
          />
          <input
            type="text"
            placeholder="Director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            className="input input-bordered input-accent w-full border-[0.5px] border-[#46c2e0] placeholder:px-1 py-2 rounded-md px-3"
          />
          <input
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="input input-bordered input-accent w-full border-[0.5px] border-[#46c2e0] placeholder:px-1 py-2 rounded-md px-3"
          />
          <button type="submit" className="bg-green-500 text-white py-1 w-fit mx-auto px-2 rounded-md shadow-md">
            Add Movie
          </button>
        </form>
      </div>
      <Link to="allMovies">
        <h3 className="text-center text-blue-500 mt-4">View all movies</h3>
      </Link>
    </>
  );
};

export default AddMovie;
