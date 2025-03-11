import { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { useNavigate } from 'react-router-dom';

const NewMovie = () => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const { addMovie } = useContext(MovieContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = { title, year, description };
        addMovie(newMovie);
        navigate('/');
    };

    return (
        <div className="container">
            <h2>הוסף סרט</h2>
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
                <button type="submit">שמור</button>
            </form>
        </div>
    );
};

export default NewMovie;

