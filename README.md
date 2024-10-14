# Movie Rating Application

A full-stack movie rating application built using the MERN stack (MongoDB, Express, React, and Node.js) where users can add movies, view a list of movies, and rate them.

## Features

- **Movie Listing Page**: View a list of all movies, including title, description, release year, and average rating.
- **Add Movie**: A form for adding a new movie with fields for title, description, year, director, and genre.
- **Rating**: Rate a movie from 1 to 5 stars, with real-time updates to the average rating.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (version 14.x or above)
- A MongoDB instance (Local)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/GauravRaner/Zentosys_Assignment.git
   cd Zentosys_Assignment


### Backend Setup
**Navigate to the backend folder**
cd backend

**Install the required packages**
npm install

**Create a .env file in the backend directory and add your MongoDB URI**
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/MovieApp?retryWrites=true&w=majority
PORT=8000

**Start Backend Server**
npm start
The backend server should now be running on http://localhost:8000.

### Frontend Setup
```bash
**Navigate to the frontend folder**
cd frontend

**Install the required packages**
npm install

**Start Frontend Server**
npm run dev

The frontend server should now be running on http://localhost:5173.

## Technologies Used
-**Frontend**: React, Axios, Tailwind CSS
-**Backend**: Node.js, Express.js, MongoDB
-**Database**: MongoDB with Mongoose
