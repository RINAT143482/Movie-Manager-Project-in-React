import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import DeleteMovie from './pages/DeleteMovie';

const App = () => {
    return (
        <MovieProvider>
            <Router>
                <div className="container">
                    <h1>מערכת ניהול סרטים</h1>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movie/:id" element={<MovieDetails />} />
                        <Route path="/new" element={<NewMovie />} />
                        <Route path="/edit/:id" element={<EditMovie />} />
                        <Route path="/delete/:id" element={<DeleteMovie />} />
                    </Routes>
                </div>
            </Router>
        </MovieProvider>
    );
};

export default App;
