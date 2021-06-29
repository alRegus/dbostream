import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const MovieList = ({ inputResult }) => {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/data')
            .then(res => res.json())
            .then(data => setMovieList(data))

        console.log(document.querySelector('.arrow-up'))
        /* document.querySelector('.main-container').addEventListener('onclick', () => {
            console.log('niig')
        }) *///!не работает почему-то
    }, [])

    /* window.addEventListener('scroll', () => { //!! переносится в moviedetail и выдает там ошибку потому что там нет элемента к которому применяется(почему-то там  скрол бар), а выбор элемента из jsx(вместо window) дает null(так как это выполняется когда jsx еще не загрузился, в useEffect уже дает элемент(но почему-то всеравно не сработал код с if(потому что скролится окно а не элемент)) или ref надо исп)
        if (window.scrollY >= 300) {
            document.querySelector('.arrow-up').setAttribute('style', 'visibility: visible')
        } else {
            document.querySelector('.arrow-up').setAttribute('style', 'visibility: hidden')
        }
    }) */

    console.log(inputResult.toUpperCase().replace(/\s+/g, ''))

    const filteredMovieList = movieList.filter(elem => {
        return elem.title.toUpperCase().replace(/\s+/g, '').includes(inputResult.toUpperCase().replace(/\s+/g, '')) //убирает все пробелы (trim() убирает только в начале и в конце)
    })

    console.log(filteredMovieList)

    const renderFilteredList = filteredMovieList.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="movie-indiv">
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

    console.log(filteredMovieList)

    //  const renderList = movieList.map(movie => (
    //      <Link key={movie.id} to={`/movie/${movie.id}`}>
    //          <div className="movie-indiv">
    //              <img src={`http://localhost:3000/img/${movie.imgCode}.jpg`} alt={movie.title} /> {/* из-за расширения не показывает некоторые картинки */}
    //              <div className="hover-info">
    //                  <div className="title-rating">
    //                      <h4>{movie.title}</h4>
    //                      <span>{movie.rating}</span>
    //                  </div>
    //                  <div className="year-genre">
    //                      <span>{movie.year}</span>
    //                      <span><i className="fas fa-star"></i> {movie.imdb}</span>
    //                  </div>
    //                  <div className="descr">
    //                       {movie.description}
    //                  </div>
    //              </div>
    //          </div>
    //      </Link>
    //  ))

    // function handleScroll() { //!!не работает почему-то с onScroll(наверно потому что скролится window а не элемент) onWheel работает
    //
    //*СРАБОТАЛО с onWheel
    //!! но теперь стрелочка не исчезает когда на неё нажимаешь так как оно само подымается к началу и колесеко не используется поэтому функция не запускается
    //
    //       console.log('scrolling')
    //       if (window.scrollY >= 300) {
    //           document.querySelector('.arrow-up').setAttribute('style', 'visibility: visible')
    //       } else {
    //           document.querySelector('.arrow-up').setAttribute('style', 'visibility: hidden')
    //       }
    //   }

    //*Событие выше стало не нужно,так как я решил проблему c window.addEventListener когда в movie detail выдовало ошибку так как в нем небыло элемента на которое воздействует событие,я просто скопировал в movie detail этот jsx эелем(стрелочку) и ошибка исчезла,а там я поставил дисплей нон чтоб небыло её видно за ненадобностю

    window.addEventListener('scroll', () => { //для того чтоб стрелочка появлялась при использовании scrollbar зажав и опуская его
        if (window.scrollY >= 300) {
            document.querySelector('.arrow-up').setAttribute('style', 'visibility: visible')
        } else {
            document.querySelector('.arrow-up').setAttribute('style', 'visibility: hidden')
        }
    })

    /* function handleArrowClose() { //! убирало стрелочку при нажатии на неё
        document.querySelector('.arrow-up').setAttribute('style', 'visibility: hidden')
    } */ //не нужно,так как window.scroll эвент и так будет стрелку убирать

    //!! useRef первое значение даст undefined а потом даст то на что ссылался это потому что она исполняется пока еще не срендарилось а когда срендарилось уже есть что брать

    return (
        <div className="main-container" /* onWheel={handleScroll} */>
            <div className="movie-container container">
                {/* {renderList} */}
                {renderFilteredList}
                <div className="arrow-up"><a href="#header" /* onClick={handleArrowClose} */><i className="fas fa-long-arrow-alt-up"></i></a></div>
            </div>
        </div>
    );
}

export default MovieList;