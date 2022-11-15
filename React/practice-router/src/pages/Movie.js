import React from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import { getMovie } from '../movie_data';

const Movie = () => {
    //URL parameter
    const params = useParams();
    const element = getMovie(parseInt(params.movieID));


    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get("detail");

    const handleClick = () => {
        setSearchParams({detail: detail === "true" ? false : true});
    }

    return (
        <div>
           <h2>{element.title}</h2>
           <p>감독: {element.director}</p>
           <p>카테고리: {element.category}</p>
           <button type="button" onClick={handleClick}>자세히 보기</button>
           {detail === "true" ? <p>{element.detail}</p>: ""}
        </div>
        
    );
};

export default Movie;