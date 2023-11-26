import React from "react";
import { useNavigate, Link } from 'react-router-dom';

function GreetingsScreen(): JSX.Element {
    const navigate = useNavigate();

    const handleLeaderClick = () => {
        navigate("/genre", { state:{isLeader: true}});
    }

    const handleNotLeaderClick = () => {
        navigate("/join", { state:{isLeader: false}});
    }

    return (
        <React.Fragment>
            <div className="film-card__bg">
                <img src="img/greetings.jpg" />
            </div>
            <div className="start_match">
                <div className="start_description">Hello!</div>
                <div className="start_buttons">
                    <div onClick={handleLeaderClick} className="btn btn_green">Start match</div>
                    <div onClick={handleNotLeaderClick} className="btn btn_gray">Join room</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default GreetingsScreen;