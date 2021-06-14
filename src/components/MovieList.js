import { useEffect, useState } from "react";


const MovieList = () => {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/data')
            .then(res => res.json())
            .then(data => setMovieList(data))
    }, [])

    const renderList = movieList.map(movie => (
        <h1 key={movie.id}>{movie.title}</h1>
    ))

    console.log(renderList)

    return (
        <div>
            {renderList}
        </div>
    );
}

export default MovieList;