import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import FilmCard from "../../components/logo/film_card/film_card";
import { useEffect, useState } from "react";
import FinalScreen from "../final_screen/final_screen";

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

    const [film, setData] = useState<Film | null>(null);

    
        const fetchIsMatch = async () => {
            console.log("runmatch")
            try {
                const response = await fetch(`http://localhost:8081/room/ismatch/${room}`);
                const body: {isMatch: boolean, movie: Film} = await response.json();
                console.log(body.isMatch);
                if (!body.isMatch) {
                    setTimeout(fetchIsMatch, 10000); 
                } else {
                    setData(body.movie);
                    fetch(`http://localhost:8081/room/delete/${room}`, {
                        method: 'POST'});
                    navigate("/final", { state:{film}});
                    console.log(body.movie);
                }
                console.log(film);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
    // console.log(isLeader);
    // console.log(room);

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
        NextFilm();
        fetch(`http://localhost:8081/room/decision/${room}?isLeader=${isLeader}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({ "idMovie": films[currentFilmIndex].movieId, "answer": false }),
        })
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
        console.log("run");
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