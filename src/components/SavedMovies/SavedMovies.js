import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Preloader from "../Preloader/Preloader";
import { searchFilterMovies } from "../../utils/searchFilterMovies";

function SavedMovies() {
  const { isLoading, saveMovies } = useContext(CurrentUserContext);
  const [isShort, setIsShort] = useState(false);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearchMovie = (query) => {
    setSearch(query);
    setMovies(searchFilterMovies(saveMovies, query));
  };

  useEffect(() => {
    if (saveMovies) {
      setMovies(searchFilterMovies(saveMovies, search));
    }
  }, [saveMovies]);

  return (
    <section className="movies">
      <SearchForm
        onChangeShort={setIsShort}
        shortStatus={isShort}
        handleSearch={handleSearchMovie}
        value={search}
        title='Сохраненные фильмы'
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={movies} search={search} isShort={isShort} />
      )}
    </section>
  );
}
export default SavedMovies;
