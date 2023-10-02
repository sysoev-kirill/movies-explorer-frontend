import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { DEVICE_PARAMS, SHORT_MOVIE } from "../../utils/constants";
import "./MoviesCardList.css";
import { useWindowResize } from "../../hooks/useWindowResize";
import { useLocation } from "react-router-dom";

function MoviesCardList({ movies, onSave, onDelete, isShort, search }) {
  const [visibleCards, setVisibleCards] = useState(12);
  const [loadMoreCards, setLoadMoreCards] = useState(3);
  const { screen } = useWindowResize();
  const location = useLocation();

  useEffect(() => {
    const { total, more } = DEVICE_PARAMS[screen]?.cards;
    if (total) {
      setVisibleCards(total);
      setLoadMoreCards(more);
    }
  }, [screen]);

  const totalMovies = movies.filter(
    (item) => !isShort || item.duration <= SHORT_MOVIE
  );

  const handleLoadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + loadMoreCards);
  };
  const cards = location.pathname === '/saved-movies' ? totalMovies.length : visibleCards;

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__box">
        
        {totalMovies && totalMovies.slice(0, cards).map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie.id || movie._id}
            onSaveMovie={onSave}
            onDelete={onDelete}
          />
        ))}
        {(totalMovies.length === 0 && search.length > 0)  && <span className="movies-card-list__error">Ничего не найдено</span>}
      </div>
      <div className="movies-card-list__container">
        {(totalMovies.length > visibleCards && location.pathname === '/movies') && (
          <button
            onClick={handleLoadMore}
            className="movies-card-list__btn"
            type="button"
          >
            Еще
          </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
