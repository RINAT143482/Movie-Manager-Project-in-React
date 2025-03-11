import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();
    const { movies } = useContext(MovieContext);
    const movie = movies.find((m) => m.id === id);

    if (!movie) {
        return <div>סרט לא נמצא</div>;
    }

    return (
        <div className="container">
            <h2>{movie.title}</h2>
            <p>
                <strong>שנה:</strong> {movie.year}
            </p>
            <p>
                <strong>תיאור:</strong> {movie.description}
            </p>

            {/* כפתורים לעריכה ולמחיקה */}
            <div>
                <Link to={`/edit/${id}`}>
                    <button>ערוך</button>
                </Link>
                <Link to={`/delete/${id}`}>
                    <button>מחק</button>
                </Link>
            </div>

            <Link to="/">חזרה</Link>
        </div>
    );
};

export default MovieDetails;
