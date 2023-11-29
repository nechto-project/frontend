import React from "react";

function NotFoundScreen(): JSX.Element {

    return (
        <React.Fragment>
            <div className="film-card__bg">
                <img src="img/notFound.jpg" />
            </div>
            <div className="film-card__wrap">
                <div className="film-card__info">
                    <h2>404</h2>
                    <h2>Вот такие пироги</h2>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NotFoundScreen;