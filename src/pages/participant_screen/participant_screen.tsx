import React from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';

function ParticipantScreen(): JSX.Element {
    const navigate = useNavigate();
    const location = useLocation();
    const {isLeader , room} = location.state;
    console.log(isLeader);
    console.log(room);

    const handleLeaderClick = () => {
        navigate("/films", { state:{isLeader, room}});
    }

    const copyRoomCode = () => {
        const roomCodeElement = document.querySelector(".part_buttons > div:first-child .btn_gray");
        if (roomCodeElement) {
          const roomCodeText = roomCodeElement.textContent as string;
          navigator.clipboard.writeText(roomCodeText).then(() => {
            alert(`Room code "${roomCodeText}" скопирован в буфер обмена.`);
          }).catch((error) => {
            console.error('Ошибка при копировании: ', error);
          });
        }
      };
    
    return (
        <React.Fragment>
            <div className="film-card__bg">
                <img src="img/part.png" />
            </div>
            <div className="start_match">
                <div className="part_description">
                    Participants
                    <p>You can invate friends to play with you or play alone</p>
                </div>
                <div className="part_buttons">
                    <div>
                        <p>room code</p>
                        <div className="btn btn_gray">{room}</div>
                    </div>
                    <div className="btn btn_gray" onClick={copyRoomCode}>
                        <img src="img/icon-copy.png" />
                    </div>
                </div>
                <div onClick={handleLeaderClick} className="btn btn_botton btn_green">Continue</div>
            </div>
        </React.Fragment>
    );
}

export default ParticipantScreen;