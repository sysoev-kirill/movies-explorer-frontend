import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import searchQuery from '../../utils/FunctionSearch';

function Movies({saveMovie, onDeleteMovie, handleSearch}) {

	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// const [userMovies, setUserMovies] = useState([]);

	const [error, setError] = useState('');
	// const [isSearch, setIsSearch] = useState(false);
	// const [isFilter, setIsFilter] = useState(false);

	// const [moviesBox, setMoviesBox] = useState([]);
	// const [moviesAreNot, setMoviesAreNot] = useState(false);

	
	// фильтр по ключевому слову query
	function filterMovie(query, shorts) {
		const storedMovies = JSON.parse(localStorage.getItem('movies'));
		const filtered = searchQuery(storedMovies, query, shorts);
		if (filtered.length === 0) {
			setError('не найдено')
		}
		setMovies(filtered);
		setIsLoading(false);
	};

// 	function searchQuery(array, query, short) {
// 		if (!array) {
// 			return [];
// 		}
// 		let filtered = [...array];
// 		if (query) {
// 			filtered = filtered.filter((element) => element.nameRU
// 				.toLowerCase()
// 				.includes(query.toLowerCase()));
// 		}
// 		if (short) {
// 			return filtered.filter((element) => element.duration <= 40);
// 		}

// 		return filtered;
	
// }

const handleSearchMovie = (query, shorts) => {
	setIsLoading(true);
	// ищем ВСЕ фильмы в localStorage
	// если их нет - загружаем с beatfilm
	const storedMovies = JSON.parse(localStorage.getItem('movies'));
	if (!storedMovies) {
		moviesApi
			.getMovies()
			.then((films) => {
				// сохраняем фильмы
				localStorage.setItem('movies', JSON.stringify(films));
				filterMovie(query, shorts);
			})
			.catch(() => {
				console.log("ошибка");
			});
	} else {
		filterMovie(query, shorts);
	}
};



return (
	<section className='movies'>
		<SearchForm handleSearch={handleSearchMovie}  handleSearcSave = {handleSearch}/>
		{isLoading ?
			<Preloader />
			:
			<MoviesCardList movies={movies} error={error} onSave = {saveMovie} onDelete = {onDeleteMovie}/>
		}
	</section>

)

}

export default Movies;
