import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const MovieList = ({ inputResult }) => {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch('https://my-film-api-for-projects.herokuapp.com/data')
            .then(res => res.json())
            .then(data => setMovieList(data))
    }, [])

    const filteredMovieList = movieList.filter(elem => {
        return elem.title.toUpperCase().replace(/\s+/g, '').includes(inputResult.toUpperCase().replace(/\s+/g, ''))
    })

    const renderFilteredList = filteredMovieList.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="movie-indiv">
                <img src={`img/${movie.imgCode}.jpg`} alt={movie.title} />
                <div className="hover-info">
                    <div className="title-rating">
                        <h4>{movie.title}</h4>
                        <span>{movie.rating}</span>
                    </div>
                    <div className="year-genre">
                        <span>{movie.year}</span>
                        <span><i className="fas fa-star"></i> {movie.imdb}</span>
                    </div>
                    <div className="descr">
                        {movie.description}
                    </div>
                </div>
            </div>
        </Link>
    ))

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 300) {
            document.querySelector('.arrow-up').setAttribute('style', 'visibility: visible')
        } else {
            document.querySelector('.arrow-up').setAttribute('style', 'visibility: hidden')
        }
    })

    return (
        <div className="main-container" >
            <div className="movie-container container">
                {renderFilteredList}
                <div className="arrow-up"><a href="#header"><i className="fas fa-long-arrow-alt-up"></i></a></div>
            </div>
        </div>
    );
}

export default MovieList;