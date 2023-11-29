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

function FinalScreen(): JSX.Element {
    const location = useLocation();
    const { room, film } = location.state;


    setTimeout(() =>fetch(`http://localhost:8081/room/delete/${room}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
    }), 20000);
    return (
        <React.Fragment>
            <div className="film-card__wrap">
                <div className="film-card__info">
                    <h2>Match!</h2>
                    <FilmCard name={film.name} description={film.description} score={film.score} poster={film.poster} genres={film.genres} directors={film.directors} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default FinalScreen;