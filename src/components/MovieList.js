import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const MovieList = () => {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/data')
            .then(res => res.json())
            .then(data => setMovieList(data))
    }, [])

    const renderList = movieList.map(movie => (
        <Link to={`/movie/${movie.id}`}>
            <div key={movie.id} className="movie-indiv">
                <img src={`http://localhost:3000/img/${movie.imgCode}.jpg`} alt={movie.title} /> {/* из-за расширения не показывает некоторые картинки */}
                <div className="hover-info">
                    <div className="title-rating">
                        <h4>{movie.title}</h4>
                        <span>{movie.rating}</span>
                    </div>
                    <div className="year-genre">
                        <span>{movie.year}</span>
                        <span><i class="fas fa-star"></i> {movie.imdb}</span>
                    </div>
                    <div className="descr">
                        {movie.description}
                    </div>
                </div>
            </div>
        </Link>
    ))


    return (
        <div>
            <div className="movie-container container">
                {renderList}
            </div>
        </div>
    );
}

export default MovieList;