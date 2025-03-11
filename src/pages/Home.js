import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const { movies } = useContext(MovieContext);

    return (
        <div className="container">
            <h2>הסרטים שלנו</h2>
            <Link to="/new">
                <button>הוסף סרט</button>
            </Link>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <Link to={`/movie/${movie.id}`}>פרטי הסרט</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
