import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [prices, setPrices] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/movies")
        .then((res) => res.json())
        .then((data) => setMovies(data));

    fetch("http://localhost:8080/api/prices")
        .then((res) => res.json())
        .then((data) => setPrices(data));
  }, []);

  const showPrices = (movieId) => {
    setSelectedMovie(movieId);
  };

  return (
      <div style={{ padding: "30px" }}>
        <h1>🎬 CinervaHQ</h1>

        {movies.map((movie) => (
            <div
                key={movie.id}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "20px",
                  marginBottom: "20px",
                  width: "350px",
                }}
            >
              <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  width="250"
              />

              <h2>{movie.title}</h2>
              <p>🎭 {movie.genre}</p>
              <p>🌐 {movie.language}</p>
              <p>⭐ {movie.rating}</p>

              <button onClick={() => showPrices(movie.id)}>
                Compare Prices
              </button>

              {selectedMovie === movie.id && (
                  <div style={{ marginTop: "15px" }}>
                    <h3>Available Platforms</h3>

                    {prices
                        .filter((p) => p.movie.id === movie.id)
                        .map((price) => (
                            <div key={price.id}>
                              {price.platform.name} - ₹{price.totalPrice}
                            </div>
                        ))}
                  </div>
              )}
            </div>
        ))}
      </div>
  );
}



export default App;