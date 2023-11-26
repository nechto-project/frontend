import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Films} from "./const_genre";

function GenreScreen(): JSX.Element {
    const location = useLocation();
    const navigate = useNavigate();
    const {isLeader} = location.state;
    console.log(isLeader);

    const handleLeaderClick = () => {
        navigate("/participant", { state:{isLeader: true}});
    }

    return (
        <React.Fragment>
            <div className="film-card__bg">
                <img className="blurred-image" src="img/genres.png" />
            </div>
            <div className="start_match">
                <div className="genre_description">Choose genres</div>
                <form name="genres" className="start_buttons">
                    {Films.map((film, index) => (
                        <React.Fragment key={index}>
                            <input className="genre_input" id={film} type="checkbox" name="genre" value={film} />
                            <label className="genre_label" htmlFor={film}>{film}</label>
                        </React.Fragment>
                    ))}
                </form>
                <div onClick={handleLeaderClick} className="btn btn_botton btn_green">Continue</div>
            </div>
        </React.Fragment>
    );
}

export default GenreScreen;