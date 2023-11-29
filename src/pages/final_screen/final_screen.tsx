import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import FilmCard from "../../components/logo/film_card/film_card";

interface Film {
    movieId: number,
    name: string,
    description: string,
    score: number,
    poster: string,
    genres: string[],
    directors: string[]
}

function FinalScreen() : JSX.Element {
    const location = useLocation();
    const {film} = location.state;

    return(
        <React.Fragment>
            <div className="film-card__wrap">
                <div className="film-card__info">
                        <FilmCard name={film.name} description={film.description} score={film.score} poster={film.poster} genres={film.genres} directors={film.directors} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default FinalScreen;