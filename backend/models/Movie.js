import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  director: { type: String, required: true },
  genre: { type: String, required: true },
  year: { type: Number, required: true },
  rating: { type: Number, default: null }, 
});

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;
