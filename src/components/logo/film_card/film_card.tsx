import React from "react";

interface FilmCardProps {
    name: string,
    description: string,
    score: number,
    poster: string,
    genres: string[],
    directors: string[]
}

function FilmCard({name, description, score, poster, genres, directors}:FilmCardProps): JSX.Element {
    return(
        <React.Fragment>
            <div className="film-card__bg">
                        <img src={poster} />
                    </div>
                    <div className="film-card__poster">
                        <img src={poster} />
                    </div>
                    <div className="film-card__desc">
                        <h2 className="film-card__title">{name}</h2>
                        <p className="film-card__meta">
                            <span>Жанры: {genres.join(', ')}</span><br/>
                            <span>Режиссеры: {directors.join(', ')}</span><br/>
                            <span>Оценка на кинопоиске: {score}</span><br/>
                            {description && (
                                <span>Описание: {description}</span>
                            )}
                        </p>
                    </div>
        </React.Fragment>
    );
}

export default FilmCard;