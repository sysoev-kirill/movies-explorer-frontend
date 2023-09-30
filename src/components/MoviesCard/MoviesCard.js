import './MoviesCard.css';
import Card from '../../images/card.jpeg';
import Save from '../../images/save.svg';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { mainApi } from '../../utils/MainApi';

function MoviesCard({ movie, saveMovies, onSaveMovie, onDelete }) {
	// const saveMovie = saveMovies.find((m) => m.movieId === movie.id);

	const [isSaved, setIsSaved] = useState(false);
	const [savedId, setSavedId] = useState('');
	const location = useLocation();

	// function toggleSaveMovie() {
	// 	if (!isSaved) {
	// 	  onSaveMovie(movie);
	// 	} else {
	// 	  onDeleteMovie(isSaved);
	// 	}
	//  }


	//  function handleDeleteMovie() {
	// 	onDeleteMovie(movie);
	//  }

	// useEffect(() => {
	// 	const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
	// 	if (savedMovies) {
	// 		savedMovies.forEach((savedMovie) => {
	// 			if (savedMovie.movieId === movie.id || savedMovie.id === movie.id) {
	// 				setIsSaved(true);
	// 				setSavedId(savedMovie.id);
	// 			}
	// 		});
	// 	}
	// });


	
	// обработчик удаления фильма из избранного

	// function handleDeleteMovie(movie) {
	// 	mainApi.deleteMovieById(movie._id)
	// 		.then(() => {
	// 			const newMoviesList = saveMovies.filter((m) => m._id === movie._id ? false : true);
	// 			setSaveMovies(newMoviesList);
	// 		})
	// 		.catch(err => console.log(err))
	// };


	 const handleMovieSaved = (evt) => {
		if (!isSaved) {
		  const newMovie = {};
		  const { image, id } = movie;

		  Object.assign(newMovie, movie); // копируем всё в новый объект
		//   delete newMovie.id;
		  delete newMovie.created_at;
		  delete newMovie.updated_at;

		  // Добавить значения 
		  Object.entries(newMovie).forEach((key) => {
			 if (!key[1]) {
				newMovie[key[0]] = '...';
			 }
		  });
		  mainApi
			 .addMovie({
				...newMovie,
				image: `https://api.nomoreparties.co/${image.url}`,
				thumbnail: `https://api.nomoreparties.co/${image.formats.thumbnail.url}`,
				movieId: id,
			 })
			 .then((savedMovie) => {
				setIsSaved(true);
				setSavedId(savedMovie.id);
				let savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
				if (!savedMovies) {
				  savedMovies = [];
				}
				savedMovies.push(savedMovie);
				localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
			 })
			 .catch((err) => {
				if (err.status === 500) {
				  console.log('Что-то пошло не так...');
				} else {
				  console.log('Нет соединения');
				}
			 });
		} else { // если isSaved === true
		  mainApi
			 .deleteMovieById(savedId)
			 .then(() => {
				setIsSaved(false);
				const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
				// Поиск и удаление сохраненного фильма из массива в localStorage
				let index = 0;
				for (let i = 0; i < savedMovies.length; i += 1) {
				  const film = savedMovies[i];
				  if (film.movieId === movie.id) {
					 index = i;
				  }
				}
				savedMovies.splice(index, 1);
				localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
				if (location.pathname === '/saved-movies') {
				  evt.target.closest('.movies-cards__item').remove();
				}
			 })
			 .catch((err) => console.log('error:', err));
		}
	 };

	return (
		<li className='movie__card'>
			<a href={movie.trailerLink} target="blank">
				<img className="movie__card-img" src={`https://api.nomoreparties.co/${movie.image.url}`}
					alt={movie.nameRU}
				/>
			</a>
			<div className='movie__card-text'>
				<h2 className="movie__card-title">{movie.nameRU}</h2>
				{location.pathname === '/movies' ?
					(<div className="movie__card-like-box">
						<button className="movie__like-button" type="button" onClick={handleMovieSaved}></button>
					</div>
					) : (
						<div className="movie__card-like-box">
							<button className="movie__delete-button" type="button" onClick={handleMovieSaved}></button>
						</div>
					)

				}
			</div>



			<p className="movie__card-time">{`${movie.duration / 60 | 0}ч ${movie.duration % 60}м`}</p>
		</li>
	)

}
export default MoviesCard;
