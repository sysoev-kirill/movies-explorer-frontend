import './SavedMovies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Movies from '../Movies/Movies';
import { useEffect, useState } from 'react';
import { mainApi } from '../../utils/MainApi';
import searchQuery from '../../utils/FunctionSearch';

function SavedMovies({ movie }) {

	// const [saveFilterMovie , setIsSaveFilterMovie] = localStorage.setItem('savedMovies');

	// useEffect(() => {
	// 	// const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));	
	// 	setIsSaveFilterMovie(saveFilterMovie);


	// }, []);

	// // отобразим все фильмы конкретного пользователя при загрузке страницы
	// useEffect(() => {
	// 	mainApi
	// 	  .getUserMovies() // фильмы всех пользователей
	// 	  .then((savedMovies) => {
	// 		 const user = localStorage.getItem('userId');
	// 		 const userMovies = savedMovies.filter((film) => film.owner === user); // из всех фильмов выбираем с подходщим id и сохраняем в переменную
	// 		 localStorage.setItem('savedMovies', JSON.stringify(userMovies)); // сохраняем их в хранилище
	// 		 setIsSaveFilterMovie(userMovies);
	// 		//  setIsLoading(false);
	// 		 if (savedMovies.length === 0) {
	// 			error('Вы еще ничего не добавили в избранное');
	// 		 }
	// 	  })
	// 	  .catch((err) => {
	// 		 error(console.log(err));
	// 	  });
	//  }, []);


	const [movies, setMovies] = useState(
		JSON.parse(localStorage.getItem('savedMovies')) || []
	); // берем фильмы из базы
	const [isLoading, setIsLoading] = useState(false); // состояние загрузки фильмов из базы
	const [error, setError] = useState('');

	const handleSearch = (query, isShort) => {
		setIsLoading(true);
		setError('');
		const savedMovies = JSON.parse(localStorage.getItem('savedMovies')); // кладем в переменную все фильмы
		const filtered = searchQuery(savedMovies, query, isShort); // фильтрация по запросу
		if (filtered.length === 0) {
			setError('Ничего не найдено');
		}
		setMovies(filtered);
		setIsLoading(false);
	};

	// отобразим все фильмы конкретного пользователя при загрузке страницы
	useEffect(() => {
		setIsLoading(true);
		mainApi
			.getUserMovies() // фильмы всех пользователей
			.then((savedMovies) => {
				setMovies(savedMovies);
				setIsLoading(false);
				if (savedMovies.length === 0) {
					setError('Вы еще ничего не добавили в избранное');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);


	// useEffect(() => {
	// 	const userMovies = localStorage.getItem('savedMovies');
	// 	if (!userMovies) {
	// 		mainApi.getUserMovies()
	// 			.then((data) => {
	// 				if (data.length > 0) {
	// 					localStorage.setItem('savedMovies', JSON.stringify(data));
	// 				}
	// 			})
	// 			.catch((err) => {
	// 				console.log(err);
	// 			});
	// 	}
	// });

	return (
		//  <section className="saved__movies">
		/* <SearchForm/>
		<MoviesCardList movie={movie}/>  */


		// </section>	

		// // )
		<Movies movie={movie} error={error} handleSearch = {handleSearch} />
	)
}
export default SavedMovies;