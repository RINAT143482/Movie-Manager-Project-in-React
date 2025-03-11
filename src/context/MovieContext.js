import { createContext, useState, useEffect } from 'react';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            let res = await fetch('http://localhost:5000/movies');
            let data = await res.json();
            setMovies(data);
        } catch (err) {
            console.error('Error fetching movies:', err);
        }
    };

    const addMovie = async (movie) => {
        let res = await fetch('http://localhost:5000/movies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(movie)
        });
        let newMovie = await res.json();
        setMovies([...movies, newMovie]);
    };

    const updateMovie = async (id, updatedMovie) => {
        await fetch(`http://localhost:5000/movies/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedMovie)
        });
        setMovies(movies.map(m => m.id === id ? updatedMovie : m));
    };

    const deleteMovie = async (id) => {
        await fetch(`http://localhost:5000/movies/${id}`, { method: 'DELETE' });
        setMovies(movies.filter(m => m.id !== id));
    };

    return (
        <MovieContext.Provider value={{ movies, addMovie, updateMovie, deleteMovie }}>
            {children}
        </MovieContext.Provider>
    );
};

export { MovieContext, MovieProvider };
