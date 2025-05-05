import { useState } from "react";
import Header from "./components/Header";
import MoodSelector from "./components/MovieSelector";
import "./index.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);

  // Fetch movies by genre ID
  const fetchMovies = async (genreId) => {
    setSelectedMood(genreId);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=popularity.desc`
      );

      if (!response.ok) throw new Error("Failed to fetch movies");
      const data = await response.json();

      // Fetch trailers
      const moviesWithTrailers = await Promise.all(
        data.results.map(async (movie) => {
          const trailerResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`
          );
          const trailerData = await trailerResponse.json();
          const trailer = trailerData.results.find(
            (vid) => vid.type === "Trailer" && vid.site === "YouTube"
          );
          return {
            ...movie,
            trailer: trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null,
          };
        })
      );

      setMovies(moviesWithTrailers);
    } catch (error) {
      console.error(error);
      setMovies([]);
    }
  };

  // Remove selected mood
  const removeMood = () => {
    setSelectedMood(null);
    setMovies([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

     
      <MoodSelector onSelect={fetchMovies} />

      
      {selectedMood && (
        <div className="flex justify-center mt-4">
          <button
            onClick={removeMood}
            className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
          >
            ❌ Remove Mood
          </button>
        </div>
      )}

    
      {selectedMood && (
        <p className="text-center text-blue-600 font-medium mt-2">
          Showing movies for selected mood 🎭
        </p>
      )}

      
      <main className="p-4 max-w-6xl w-full mx-auto">
        {movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <div key={movie.id} className="p-4 border rounded shadow bg-white">
                {/* Movie Poster */}
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded-lg"
                />

      
                <h3 className="font-semibold text-base mt-2 text-center">{movie.title}</h3>

            
                <p className="text-sm text-gray-600 mt-1 text-center line-clamp-3">{movie.overview}</p>

          
                {movie.trailer ? (
                  <a
                    href={movie.trailer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 text-center w-full"
                  >
                    Watch Trailer 🎥
                  </a>
                ) : (
                  <p className="text-sm text-gray-500 mt-2 text-center">No trailer available.</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">No movies found for this mood.</p>
        )}
      </main>
    </div>
  );
};

export default App;
