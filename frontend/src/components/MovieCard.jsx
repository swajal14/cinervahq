function MovieCard({ movie, onCompare }) {
    return (
        <div className="card shadow-lg h-100">
            <img
                src={movie.posterUrl}
                className="card-img-top"
                alt={movie.title}
                style={{
                    height: "450px",
                    objectFit: "cover",
                }}
            />

            <div className="card-body">
                <h4>{movie.title}</h4>

                <p>
                    <strong>🎭 Genre:</strong> {movie.genre}
                </p>

                <p>
                    <strong>🌐 Language:</strong> {movie.language}
                </p>

                <p>
                    <strong>⭐ Rating:</strong> {movie.rating}
                </p>

                <div className="d-flex gap-2 mb-3">
                    <a
                        href={movie.trailerUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-danger"
                    >
                        ▶ Trailer
                    </a>

                    <button
                        className="btn btn-primary"
                        onClick={() => onCompare(movie.id)}
                    >
                        Compare Prices
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;