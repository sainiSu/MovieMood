import { useState } from "react";
import Header from "./components/Header";
import MoodSelector from "./components/MovieSelector";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const App = () => {
  const [movies, setMovies] = useState([]); // State to store movies

  // Function to fetch movies based on the selected mood
  const fetchMovies = async (genreId) => {
    try {
      // Fetch movies by genre
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=popularity.desc`
      );

      if (!response.ok) throw new Error("Failed to fetch movies");
      const data = await response.json();

      // Fetch trailers for each movie
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

      // Update the state with movies and trailers
      setMovies(moviesWithTrailers);
    } catch (error) {
      console.error(error);
      setMovies([]); // Clear movies if an error occurs
    }
  };

  return (
    <div>
      {/* App Header */}
      <Header />

      {/* Mood Selector */}
      <MoodSelector onSelect={fetchMovies} />

      {/* Movies Display */}
      <div className="p-4 max-w-4xl w-full">

        {movies?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {movies.map((movie) => (
              <div key={movie.id} className="p-4 border rounded shadow">

                {/* Movie Poster */}
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-52 object-cover rounded-lg"
                />

                {/* Movie Title */}
                <h3 className="font-semibold text-base mt-2 text-center">{movie.title}</h3>

                {/* Movie Overview */}
                <p className="text-sm text-gray-600 mt-1 text-center line">{movie.overview}</p>

                {/* Trailer Link */}
                {movie.trailer ? (
                  <a
                    href={movie.trailer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
                  >
                    Watch Trailer 🎥
                  </a>

                ) : (
                  <p className="text-sm text-gray-500 mt-2">No trailer available.</p>
                )}
              </div>

            ))}
          </div>

        ) : (
          <p className="text-center text-gray-500">No movies found for this mood.</p>
        )}

      </div>
    </div>
  );
};

export default App;
