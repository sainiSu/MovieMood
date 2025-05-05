# 🎬 Movie Mood Matcher

Discover the perfect movie based on your mood!  
This React + Tailwind CSS project fetches movie recommendations from **TMDb API** based on selected moods like Action, Romantic, Happy, and Sad.

## 🚀 Features

- 🎭 Choose a mood to get curated movie results.
- 🎥 View posters, movie overviews, and trailers.
- ❌ Option to remove selected mood and reset.
- 📱 Fully responsive layout using Tailwind CSS.
- 🌐 Integrates with TMDb for real-time movie data.

## 🧱 Project Structure

movie-mood-matcher/
├── public/                     # Static files (e.g. icons, images, favicons)
│  
│   └── vite.svg

├── src/                        # All source code
│   ├── assets/                 # Custom images, icons, etc.
│   │   └── react.svg

│   ├── components/             # Reusable React components
│   │   ├── Header.jsx
│   │   └── MovieSelector.jsx

│   ├── App.jsx                 # Main app component
│   ├── index.css               # Tailwind + custom styles
│   ├── main.jsx                # Entry point (ReactDOM.render)
│
├── .env                        # Environment variables (e.g. API keys)
├── .gitignore                  # Files to ignore in Git
├── index.html                 # Main HTML template
├── package.json                # Project metadata and dependencies
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
├── README.md                   # Project documentation
└── package-lock.json           # Lockfile for npm dependencies


## 🛠️ Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/sainiSu/MovieMood.git
   cd movieMood


VITE_TMDB_API_KEY=your_tmdb_api_key_here



## To run

npm run dev
