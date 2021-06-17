import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';


const MovieList = () => {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/data')
            .then(res => res.json())
            .then(data => setMovieList(data))


        /* document.querySelector('.arrow-aup').setAttribute('style', 'visibility: visible') */ //!!не сработало
    }, [])

    /* window.addEventListener('scroll', () => { //!! переносится в moviedetail и выдает там ошибку(почему-то там появился скрол бар которго раньше небыло), а выбор элемента из jsx дает null(так как это выполняется когда jsx еще не загрузился в useEffect уже дает элемент(но почему-то всеравно не сработал код с if) или ref надо исп)
        if (window.scrollY >= 300) {
            document.querySelector('.arrow-up').setAttribute('style', 'visibility: visible')
        } else {
            document.querySelector('.arrow-up').setAttribute('style', 'visibility: hidden')
        }
    }) */



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
                        <span><i className="fas fa-star"></i> {movie.imdb}</span>
                    </div>
                    <div className="descr">
                        {movie.description}
                    </div>
                </div>
            </div>
        </Link>
    ))

    /*  function handleScroll() { //!!не работает почему-ио
         console.log(document.querySelector('.arrow-up'))
     } */

    //!! useRef первое значение дас undefined а потом дас то на что сылался это потому что она исполняется пока еще не срендорилось а когда срендарилось уже есть что брать

    return (
        <div className="main-container">
            <div className="movie-container container">
                {renderList}
                <div className="arrow-up"><a href="#header"><i className="fas fa-long-arrow-alt-up"></i></a></div>
            </div>
        </div>
    );
}

export default MovieList;