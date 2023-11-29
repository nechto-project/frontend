import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Films } from "./const_genre";

function GenreScreen(): JSX.Element {
    const location = useLocation();
    const navigate = useNavigate();
    const { isLeader } = location.state;
    console.log(isLeader);
    let room: string;

    const handleLeaderClick = async () => {
        const checkboxes = document.querySelectorAll('input[name="genre"]:checked');
        const data = Array.from(checkboxes).map((checkbox) => checkbox.id);
        fetch('http://localhost:8081/room/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.text())
            .then((responseText) => {
                room = responseText;
                console.log(room);
                navigate("/participant", { state: { isLeader: isLeader, room: room } });
            })
            .catch((error) => {
                console.error(error);
            });
        
    };

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