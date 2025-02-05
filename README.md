# Movie Portal

## Project Overview
Movie Portal is a web application that simplifies the process of exploring movies, viewing detailed information, and managing a personal movie collection. Users can add movies to their lists, delete them, and even mark movies as favorites. The dynamic UI and smooth user experience ensure that movie lovers have an enjoyable time interacting with the platform.

## Screenshot
[Movie Portal Screenshot](https://i.ibb.co/B2ZQ2MH3/movieverse-f8eae-web-app-Nest-Hub-Max.png)



## Technologies Used
- **Frontend**: React.js, HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **External API**: The Movie Database (TMDb) API
- **State Management**: Redux (for managing app state)

## Core Features
- **Movie Search**: Users can search for movies using the TMDb API.
- **Movie Details**: View detailed information about movies such as plot, cast, ratings, etc.
- **Add Movies**: Users can add movies to their collection or favorites list.
- **Delete Movies**: Remove movies from personal collections or favorites.
- **User Authentication**: Secure login system using JWT to manage personal movie lists.
- **Favorites Management**: Users can mark and manage their favorite movies for quick access.
- **Responsive Design**: A fully responsive interface ensuring smooth navigation on both desktop and mobile devices.

## Dependencies
- React.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- Axios (for API calls)
- Redux (for state management)
- Bootstrap (or TailwindCSS for styling)

## How to Run the Project Locally
1. Clone the repository:  
   `git clone https://github.com/username/movie-portal.git`
2. Navigate into the project directory:  
   `cd movie-portal`
3. Install dependencies for both frontend and backend:  
   - For the frontend:  
     `cd client && npm install`
   - For the backend:  
     `cd server && npm install`
4. Set up environment variables (refer to `.env.example` in the repo for required environment variables like TMDb API key, JWT secret, and MongoDB connection string).
5. Start the backend server:  
   `npm run dev`  
   *(Ensure MongoDB is running or use a cloud database like MongoDB Atlas)*
6. Start the frontend application:  
   `npm start`
7. Open your browser and visit:  
   `http://localhost:3000` to view the project.

## Live Project Link
Live Lik : https://movieverse-f8eae.web.app

## Relevant Resources
Git-HUb Client link : https://github.com/nabishafin/movieverse-client.git
Git-HUb Server link : https://github.com/nabishafin/movieverse-server.git
