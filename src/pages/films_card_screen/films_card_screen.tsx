import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function FilmsCardScreen(): JSX.Element {
    const navigate = useNavigate();
    const location = useLocation();
    const {isLeader} = location.state;
    console.log(isLeader);

    return (
        <React.Fragment>
            <div className="film-card__bg">
                <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/orig" />
            </div>
            <div className="film-card__wrap">
                <div className="film-card__info">
                    <div className="film-card__poster">
                        <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/orig" />
                    </div>

                    <div className="film-card__desc">
                        <h2 className="film-card__title">Film</h2>
                        <p className="film-card__meta">
                            <span className="film-card__genre">genre</span>
                            <span className="film-card__year">director</span>
                        </p>
                    </div>
                    <div>
                        <div className="film-card__buttons">
                            <button className="btn film-card__button" type="button">
                                <img src="img/крестик-48.png"/>
                            </button>
                            <button className="btn film-card__button" type="button">
                                <img src="img/галочка-48.png"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FilmsCardScreen;