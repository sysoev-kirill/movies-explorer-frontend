import { useEffect, useRef, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { useLocation } from 'react-router-dom';
import { moviesApi } from '../../utils/MoviesApi';

function SearchForm({disableCheckbox, onFilter, handleSearch}) {
	const [inputValue, setInputValue] = useState('');
	// const [movies, setMovies] = useState([]);
	const [inputSearchMessage, setInputSearchMessage] = useState('');
	const [checked, setChecked] = useState(false);
	const [visibleMovies, setVisibleMovies] = useState([]);
	// const [showMore, setShowMore] = useState(false);
	const location = useLocation();
	
	// useEffect(() => {
	// 	if (location.pathname === "/movies") {
	// 		setInputValue(localStorage.getItem("moviesSearch"))
	// 	}
	//  }, [])
  
	//  const handleChangeInput = (evt) => {
	// 	setInputValue(evt.target.value)
	//  }
  
	//  useEffect(() => {
	// 	setInputSearchMessage("");
	//  }, [inputValue]);

	//  const handleSubmit = (evt) => {
	// 	evt.preventDefault();
	// 	if (location.pathname === "/movies") {
	// 	  (inputValue)
	// 		 ? onSubmit(inputValue)
	// 		 : setInputSearchMessage("Нужно ввести ключевое слово");
	// 	} else {
	// 	  onSubmit(inputValue);
	// 	}
	//  }
	const handleChangeInput = (event) => {
		setInputValue(event.target.value);
		if (event.target.value === '') {
		  setInputSearchMessage('Нужно ввести ключевое слово');
		} else {
		  setInputSearchMessage('');
		}
	 }
  
	  // выбрать короткометражки
	  const handleCheckbox = () => {
		setChecked(!checked);
		handleSearch(inputValue, !checked);
		if (location.pathname === '/movies') {
		  localStorage.setItem('shorts', !checked);
		}
	 };

	 const handleSubmit = (evt) => {
		evt.preventDefault();
		if (!inputValue) {
			setInputSearchMessage(true);
		  evt.target.elements['search-input'].focus();
		  return;
		}
		setInputSearchMessage(false);
		// setPlaceholderContent('Movie');
		if (location.pathname === '/movies') {
		  localStorage.setItem('query', inputValue);
		}
		handleSearch(inputValue, checked);
	 };


	//  const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	if (inputValue === '') {
	// 	  setInputSearchMessage('Нужно ввести ключевое слово');
	// 	  setMovies([]);
	// 	} else {
	// 	  isLoading(true);
	// 	  moviesApi.getMovies()
	// 		 .then(response => response.json())
	// 		 .then(data => {
	// 			const filteredData = data.filter(movie => movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()));
	// 			if (filteredData.length === 0) {
	// 			  setInputSearchMessage('Ничего не найдено');
	// 			  setMovies([]);
	// 			} else {
	// 			  setInputSearchMessage('');
	// 			  setMovies(filteredData);
	// 			//   setShowMore(filteredData.length > 4);
	// 			}
	// 			isLoading(false);
	// 		 })
	// 		 .catch(error => {
	// 			console.error(error);
	// 			setInputSearchMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
	// 			isLoading(false);
	// 		 });
	// 	}
	//  }
  
	//  useEffect(() => {
	// 	setVisibleMovies(movies.slice(0, 4));
	//  }, [movies]);
  
	//  const handleShowMore = () => {
	// 	setVisibleMovies(movies.slice(0, visibleMovies.length + 4));
	// 	setShowMore(visibleMovies.length + 4 < movies.length);
	//  }
	useEffect(() => {
		if (location.pathname === '/movies') {
		  const savedInputValue = localStorage.getItem('query');
		  const savedShorts = JSON.parse(localStorage.getItem('shorts'));
		  if (savedInputValue) {
			 setInputValue(savedInputValue);
		  }
		  if (savedShorts) {
			 setChecked(savedShorts);
		  }
		  if (savedInputValue || savedShorts === true) {
			 handleSearch(savedInputValue, savedShorts);
		  }
		}
	 }, []);

	return (
		<div className='search'>
			<form className="search__form" onSubmit={handleSubmit} noValidate>
				<input
					className="search__input"
					value={inputValue || ""}
					type="text"
					name='search-input'
					placeholder="Фильм"
					required
					minLength={2}
					maxLength={20}
					onChange={handleChangeInput}
				>
				</input>
				<button
					className="search__button"
					type="submit"
				>
					Найти
				</button>
			</form>
			<span className="search__form-error">{inputSearchMessage}</span>
			<FilterCheckbox disableCheckbox={disableCheckbox} onChange={handleCheckbox} />
			
		</div>
	)

}

export default SearchForm;
