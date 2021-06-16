import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const MovieDetailPage = () => {
    const { id } = useParams()

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/data/${id}`)
            .then(res => res.json())
            .then(data => setMovie(data));
    }, [id]);

    return (
        <div className="movie-detail">

        </div>
    );
}

export default MovieDetailPage;