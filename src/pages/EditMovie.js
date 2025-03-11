import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const EditMovie = () => {
    const { id } = useParams();
    const { movies, updateMovie } = useContext(MovieContext);
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const movie = movies.find((m) => m.id === id);
        if (movie) {
            setTitle(movie.title);
            setYear(movie.year);
            setDescription(movie.description);
        }
    }, [id, movies]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedMovie = { title, year, description };
        updateMovie(id, updatedMovie);
        navigate('/');
    };

    return (
        <div className="container">
            <h2>ערוך סרט</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>שם הסרט:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>שנה:</label>
                    <input
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div>
                    <label>תיאור:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit">עדכן</button>
            </form>
        </div>
    );
};

export default EditMovie;
