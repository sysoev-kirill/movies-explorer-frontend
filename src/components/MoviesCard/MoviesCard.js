import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./MoviesCard.css";

function MoviesCard({ movie }) {
  const { handleSaveMovie, handleDeleteMovie, ifMovies } =
    useContext(CurrentUserContext);
const location = useLocation()
  return (
    <div className="movies-card">
      <a href={movie.trailerLink} target="blank">
        <img
          className="movies-card__img"
          src={movie.image}

          alt={movie.nameRU}
        />
      </a>
      <div className="movies-card__text">
        <h2 className="movies-card__title">{movie.nameRU}</h2>
        {movie._id ? (
          <div className="movies-card__like-box">
            <button
              className={`movies-card__like-button${
                !ifMovies ? "-delete" : "-save"
              }`}
              type="button"
              onClick={() => handleDeleteMovie(movie)}
            ></button>
          </div>
        ) : (
          <div className="movies-card__like-box">
            <button
              className="movies-card__like-button"
              type="button"
              onClick={() => handleSaveMovie(movie)}
            ></button>
          </div>
        )}
      </div>
      <p className="movies-card__time">{`${(movie.duration / 60) | 0}ч ${
        movie.duration % 60
      }м`}</p>
    </div>
  );
}
export default MoviesCard;

