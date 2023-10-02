import { useContext, useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { searchFilterMovies } from "../../utils/searchFilterMovies";

function Movies() {
  const { isLoading, allMovies, onSearch } = useContext(CurrentUserContext);

  const [isShort, setIsShort] = useState(false);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (query) => {
    handleSearchMovie(query)
    onSearch()
  }

  const handleSearchMovie = (query) => {
    if (query) {
      setMovies(searchFilterMovies(allMovies, query));
    } else {
      setMovies([]);
    }
    setSearch(query);
    localStorage.setItem("searchMoviesText", query);
};
const handleIsShort = (is) => {
	setIsShort(is)
	localStorage.setItem("isShort", is);
  }

  useEffect(() => {
    const searchMoviesText = localStorage.getItem("searchMoviesText");
    if (searchMoviesText && searchMoviesText.length && allMovies.length) {
		handleSearchMovie(searchMoviesText);
    } else {
		setMovies([])
	}
	const isShortLocal = localStorage.getItem("isShort");
    if (isShortLocal) {
		handleIsShort(isShortLocal === 'true');
    }
  }, [allMovies]);

  return (
    <section className="movies">
      <SearchForm
        onChangeShort={handleIsShort}
        shortStatus={isShort}
        handleSearch={handleSearch}
        value={search}
        title='Фильмы'
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={movies} search={search} isShort={isShort} />
      )}
    </section>
  );
}

export default Movies;
