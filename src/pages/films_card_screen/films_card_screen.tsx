import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import FilmCard from "../../components/logo/film_card/film_card";
import { useEffect, useState } from "react";
import FinalScreen from "../final_screen/final_screen";
import NotFoundScreen from "../not_found_page/not_found_page";

interface Film {
    movieId: number,
    name: string,
    description: string,
    score: number,
    poster: string,
    genres: string[],
    directors: string[]
}

function FilmsCardScreen(): JSX.Element {
    const navigate = useNavigate();
    const location = useLocation();
    const { isLeader, room } = location.state;
    const [film, setFilm] = useState<Film | null>(null);


    const fetchIsMatch = () => {
        fetch(`http://localhost:8081/room/ismatch/${room}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        })
            .then((response) => response.json())
            .then((responseJson: { isMatch: boolean, movie: Film }) => {
                if (!responseJson.isMatch) {
                    setTimeout(fetchIsMatch, 7000);
                } else {
                    setFilm(responseJson.movie);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        film && navigate("/final", { state: { room, film } });
    }, [film]);

    const [films, setFilms] = useState<Film[]>([]);
    const [currentFilmIndex, setCurrentFilmIndex] = useState<number>(0);

    const handleAcceptFilm = () => {
        fetch(`http://localhost:8081/room/decision/${room}?isLeader=${isLeader}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({ "idMovie": films[currentFilmIndex].movieId, "answer": true }),
        })
        NextFilm();
    }
    const handleRejectFilm = () => {
        fetch(`http://localhost:8081/room/decision/${room}?isLeader=${isLeader}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({ "idMovie": films[currentFilmIndex].movieId, "answer": false }),
        })
        NextFilm();
    }
    function NextFilm() {
        if (currentFilmIndex < films.length - 1) {
            setCurrentFilmIndex(prevIndex => prevIndex + 1);
        }
    };

    const fetchData = () => {
        fetch(`http://localhost:8081/movie/search/${room}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        })
            .then((response) => response.json())
            .then((responseJson: Film[]) => {
                setFilms(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchData();
        fetchIsMatch();
    }, []);

    return (
        <React.Fragment>
            <div className="film-card__wrap">
                <div className="film-card__info">
                    {films.length > 0 && (
                        <FilmCard name={films[currentFilmIndex].name} description={films[currentFilmIndex].description} score={films[currentFilmIndex].score} poster={films[currentFilmIndex].poster} genres={films[currentFilmIndex].genres} directors={films[currentFilmIndex].directors} />
                    )}
                    <div>
                        <div className="film-card__buttons">
                            <button onClick={handleRejectFilm} className="btn film-card__button" type="button">
                                <img src="img/крестик-48.png" />
                            </button>
                            <button onClick={handleAcceptFilm} className="btn film-card__button" type="button">
                                <img src="img/галочка-48.png" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FilmsCardScreen;