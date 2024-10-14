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
- A MongoDB instance (local )

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/GauravRaner/Zentosys_Assignment.git
   cd Zentosys_Assignment


### Install the required packages
npm install

# Create a .env file in the backend directory and add your MongoDB URI
echo "MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/MovieApp?retryWrites=true&w=majority" > .env
echo "PORT=8000" >> .env

# Start the backend server
npm start
The backend server should now be running on http://localhost:8000.
Frontend Setup
bashCopy# Navigate to the frontend folder
cd ../frontend

# Install the required packages
npm install

# Start the frontend server
npm run dev
The frontend server should now be running on http://localhost:5173.

Usage

Open your web browser and navigate to http://localhost:5173
Use the "Add Movie" form to add new movies to the database
View the list of movies on the main page
Rate movies using the star rating system

Contributing
If you'd like to contribute to this project, please fork the repository and create a pull request with your proposed changes.
License
This project is open source and available under the MIT License.
Contact
For any questions or concerns, please open an issue on this repository or contact the project maintainer at [your-email@example.com].
