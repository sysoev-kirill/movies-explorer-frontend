import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies, movieId, onSave, onDelete}) {

	
	return (

		<section className="movies__section">
			<ul className="movies__box">
				{movies.map((movie, i)=>( 
				<MoviesCard 
				movie={movie}
				key={movie.id || movie._id}
				onSaveMovie={onSave}
				onDelete={onDelete}
				/>
			
			))}
			</ul>
			<div className="movies__button-container">
				<button className="movies__btn" type="button">
					Еще
				</button>
			</div>
		</section>
	)

}

export default MoviesCardList;