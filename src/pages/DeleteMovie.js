import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteMovie = () => {
    const { id } = useParams();
    const { deleteMovie } = useContext(MovieContext);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteMovie(id);
        navigate('/');
    };

    return (
        <div className="container">
            <h2>האם אתה בטוח שברצונך למחוק את הסרט הזה?</h2>
            <button onClick={handleDelete}>כן, מחק</button>
            <button onClick={() => navigate('/')}>ביטול</button>
        </div>
    );
};

export default DeleteMovie;
