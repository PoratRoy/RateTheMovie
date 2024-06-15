# Rate The Movie

**Live Application**: [Rate The Movie](https://cusort.com/)

## Overview
**Rate The Movie** is a dynamic web application that challenges players to rank movies based on their IMDb ratings accurately. It provides a fun and competitive platform for movie enthusiasts to test their knowledge, with gameplay options available for both single and multiplayer modes. Players earn points by successfully guessing the correct order of movie ratings. The single-player mode features a leaderboard to track high scores, while the multiplayer mode allows friends to compete against each other in real-time.


## Features
- **Single-Player Mode**: Play alone and try to score the highest points by correctly guessing the order of movie ratings.
- **Multiplayer Mode**: Compete with friends in real-time to see who can accurately rank movies the fastest.
- **Leaderboard**: Track top scores in single-player mode.
- **Real-Time Gameplay**: Powered by `socket.io` for seamless multiplayer interactions.

## Tech Stack
- **Frontend**: Developed using React TypeScript with Vite for efficient and modern web development.
- **Backend**: Built on Node.js with Express TypeScript, ensuring a robust server-side solution.
- **Database**: MongoDB, a NoSQL database, used for storing user data and game statistics efficiently.
- **Real-Time Engine**: `socket.io` is used to manage real-time communication in multiplayer games, enhancing user interaction.

## Project Structure
- `/Web`: Frontend application files
- `/Server`: Backend application files

## Environment Setup
Both the frontend and backend use `.env` files for configuration. Templates for these can be found in the respective `.env.example` files located in the `/Web` and `/Server` folders.

## Getting Started

### Prerequisites
- Node.js (recommended installation via nvm)
- MongoDB

### Setup and Installation
1. **Clone the repository**
```
git clone https://github.com/yourusername/ratethemovie.git
cd ratethemovie
```

2. **Frontend Setup**
```
cd Web
cp .env.example .env # Adjust settings in .env as necessary
npm install
npm run start
```

3. **Backend Setup**
```
cd ../Server
cp .env.example .env # Adjust settings in .env as necessary
npm install
npm start
```

### Running the App
- Navigate to `localhost:3000` in your web browser to view the frontend.
- The backend runs on `localhost:5000` by default.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.


