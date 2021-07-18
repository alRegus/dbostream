import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieDetailPage = () => {
    const { id } = useParams()

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(`https://my-film-api-for-projects.herokuapp.com/data/${id}`)
            .then(res => res.json())
            .then(data => setMovie(data));
    }, [id]);

    let backGround
    let video

    switch (movie.imgCode) {
        case "lionheart":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(253,29,29,0.9472163865546218) 80%, rgba(255,205,134,1) 100%)';
            video = '<iframe src="https://www.youtube.com/embed/QKqjwvWNnzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "bloodsport":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(98,66,66,1) 80%, rgba(166,21,21,1) 100%)';
            video = '<iframe src="https://www.youtube.com/embed/BION4_Lh2ls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "fight-club":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(219,0,222,1) 80%, rgba(19,198,144,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/qtRKdVHc-cE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "armour-of-god":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(53,222,0,1) 80%, rgba(198,19,32,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/eAD4HQ8Su9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "armour-of-god-two":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(222,212,0,1) 80%, rgba(83,128,148,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Q2PSVYJ9xwQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "under-siege":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(37,121,175,1) 80%, rgba(219,236,244,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Rl8pTF4f3Jg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "universal-soldier":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(37,121,175,1) 80%, rgba(236,51,0,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/5Y7BWfIEfuo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "predator":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(58,145,115,1) 80%, rgba(219,14,50,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/X2hBYGwKh3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "alien":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(99,119,112,1) 80%, rgba(139,135,164,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/LjLamj-b0I8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "aliens":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(244,43,78,1) 80%, rgba(88,124,170,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/bTCaVjQ8nU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "terminator":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(218,103,217,1) 80%, rgba(84,129,171,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/k64P4l2Wmeg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "terminator-two":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(100,121,249,1) 80%, rgba(255,23,1,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/CRRlbK5w8AE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "training-day":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(63,64,71,1) 80%, rgba(200,187,186,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/DXPJqRtkDP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "eternal-sunshine":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(138,116,75,1) 80%, rgba(211,227,113,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/yE-f1alkq9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "first-blood":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(47,171,233,1) 80%, rgba(217,6,6,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/IAqLKlxY3Eo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "demolition-man":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(79,63,209,1) 80%, rgba(43,50,159,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/0B5v6QZ5R3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "speed":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(251,80,9,1) 80%, rgba(255,172,223,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/8piqd2BWeGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "project-a":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(255,164,126,1) 80%, rgba(217,210,214,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/STdbJa3tOGE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "blade-runner":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(43,114,232,1) 80%, rgba(245,85,164,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/eogpIG53Cis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case "jurassic-park":
            backGround = 'linear-gradient(90deg, rgba(0,0,0,1) 41%, rgba(233,24,24,1) 80%, rgba(254,148,0,1) 100%)';
            video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/QWBKEmWWL38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        default:
            backGround = 'black'
    }

    function handleModal() {
        const modal = document.querySelector('.modal')
        modal.style.display = 'block'

        document.querySelector('.vid-container').innerHTML = video
    }

    const handleClose = () => {
        document.querySelector('.modal').style.display = 'none'
        document.querySelector('.vid-container').innerHTML = null
    }

    return (
        <div className="movie-detail" style={{ "background": backGround }}>
            <div className="modal">
                <div className="vid-container"></div>
                <div className="modal-back" onClick={handleClose}><i className="far fa-window-close"></i></div>
            </div>
            <Link to='/' className='details-back-btn'>
                <i className="fas fa-backspace"></i>
            </Link>
            <div className="movie-descr">
                <div className="movie-persons">
                    <div>
                        <h4>DIRECTOR</h4>
                        <p>{movie.director}</p>
                    </div>
                    <div>
                        <h4>WRITERS</h4>
                        <p>{movie.writers}</p>
                    </div>
                    <div>
                        <h4>CAST</h4>
                        <p>{movie.cast}</p>
                    </div>
                </div>
                <div className="movie-rest">
                    <h1 style={{ 'color': '#fff' }}>{movie.title}</h1>
                    <div className="movie-rest-info">
                        <span><i className="fas fa-star"></i> {movie.imdb}</span>
                        <span>{movie.duration} minutes</span>
                        <span className="movie-rest-info-rating">{movie.rating}</span>
                        <span>{movie.year}</span>
                    </div>
                    <div>{movie.genre}</div>
                    <div className="movie-rest-descr">{movie.description}</div>
                    <div className="buttons">
                        <button onClick={handleModal}><i className="fas fa-play"></i></button>
                    </div>
                </div>
            </div>
            <div className="movie-poster">
                <img src={`http://localhost:3000/img/${movie.imgCode}.jpg`} alt={movie.title} />
            </div>

            <div style={{ 'display': 'none' }} className="arrow-up"><a href="#header" ><i className="fas fa-long-arrow-alt-up"></i></a></div>
        </div >
    );
}

export default MovieDetailPage;