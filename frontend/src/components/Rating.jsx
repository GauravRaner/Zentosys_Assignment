import React, { useState } from 'react';
import axios from 'axios';

const Rating = ({ movieId, onRatingAdded, rated }) => {
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating < 1 || rating > 5) return alert('Rating should be between 1 and 5');
    try {
      await axios.post(`http://localhost:8000/api/movies/${movieId}/rate`, { rating });
      onRatingAdded(); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {rated ? ( 
        "" 
      ) : (
        <form onSubmit={handleSubmit} className="flex items-center mt-1 ">
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))} className='border-[1px] border-[#9ec7ee]'>
            <option value="0">Rate...</option>
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>{star} Star</option>
            ))}
          </select>
          <button type="submit" className="ml-2 px-2 py-[3px] bg-blue-500 text-white rounded">Submit Rating</button>
        </form>
      )}
    </div>
  );
};

export default Rating;
