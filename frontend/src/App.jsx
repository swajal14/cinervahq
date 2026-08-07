import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";

function App() {
    const [movies, setMovies] = useState([]);
    const [prices, setPrices] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("desc");

    useEffect(() => {
        fetch("http://localhost:8080/api/movies")
            .then((res) => res.json())
            .then((data) => setMovies(data))
            .catch((err) => console.error(err));

        fetch("http://localhost:8080/api/prices")
            .then((res) => res.json())
            .then((data) => setPrices(data))
            .catch((err) => console.error(err));
    }, []);

    const showPrices = (movieId) => {
        setSelectedMovie(selectedMovie === movieId ? null : movieId);
    };

    return (
        <div className="container mt-4">
            <Navbar />

            <div className="row mb-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search movies..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="col-md-6">
                    <select
                        className="form-select"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="desc">Highest Rated First</option>
                        <option value="asc">Lowest Rated First</option>
                    </select>
                </div>
            </div>

            <div className="row">
                {movies
                    .filter((movie) =>
                        movie.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .sort((a, b) =>
                        sortOrder === "desc"
                            ? b.rating - a.rating
                            : a.rating - b.rating
                    )
                    .map((movie) => {
                        const moviePrices = prices.filter(
                            (p) => p.movie.id === movie.id
                        );

                        const cheapestPrice =
                            moviePrices.length > 0
                                ? Math.min(...moviePrices.map((p) => p.totalPrice))
                                : null;

                        return (
                            <div key={movie.id} className="col-md-4 mb-4">
                                <MovieCard
                                    movie={movie}
                                    onCompare={showPrices}
                                />

                                {selectedMovie === movie.id && (
                                    <div className="card mt-2 p-3">
                                        <h5>Available Platforms</h5>

                                        {moviePrices.map((price) => (
                                            <div
                                                key={price.id}
                                                className={`p-2 mb-2 rounded ${
                                                    price.totalPrice === cheapestPrice
                                                        ? "bg-success text-white"
                                                        : "bg-light"
                                                }`}
                                            >
                                                <strong>{price.platform.name}</strong>

                                                <br />

                                                Ticket Price: ₹{price.ticketPrice}

                                                <br />

                                                Convenience Fee: ₹{price.convenienceFee}

                                                <br />

                                                Total Price: ₹{price.totalPrice}

                                                {price.totalPrice === cheapestPrice && (
                                                    <span className="ms-2">
                            ✅ Best Price
                          </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default App;