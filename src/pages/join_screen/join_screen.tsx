import React , {useState} from "react";
import { Link, useLocation, useNavigate} from 'react-router-dom';

function JoinScreen(): JSX.Element {
    const navigate = useNavigate();
    const location = useLocation();
    const {isLeader} = location.state;
    console.log(isLeader);
    const [room, setInput] = useState('');

    const handleNotLeaderClick = () => {
        console.log(room);
        navigate("/films", { state:{isLeader, room}});
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
                    <input id="room_code" className="btn btn_gray" type="text" value={room} onInput={(e:React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}/>
                    <div onClick={handleNotLeaderClick} typeof="submit" className="btn btn_botton btn_green">Continue</div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default JoinScreen;