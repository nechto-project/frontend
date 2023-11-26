import React from "react";
import { Link, useLocation, useNavigate} from 'react-router-dom';

function JoinScreen(): JSX.Element {
    const navigate = useNavigate();
    const location = useLocation();
    const {isLeader} = location.state;
    console.log(isLeader);

    const handleNotLeaderClick = () => {
        navigate("/films", { state:{isLeader}});
    }

    return (
        <React.Fragment>
            <div className="film-card__bg">
                <img src="img/part.png" />
            </div>
            <div className="start_match">
                <div className="part_description">
                    Join to room
                    <p>You mast have code room</p>
                </div>
                <form className="start_match" >
                    <p>room code</p>
                    <input className="btn btn_gray" type="text" />
                    <div onClick={handleNotLeaderClick} typeof="submit" className="btn btn_botton btn_green">Continue</div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default JoinScreen;