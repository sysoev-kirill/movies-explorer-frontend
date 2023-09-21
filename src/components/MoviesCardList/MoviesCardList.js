import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
	return (

		<section className="movies__section">
			<div className="movies__box">
				<MoviesCard />
				<MoviesCard />
				<MoviesCard />
				<MoviesCard />
				<MoviesCard />
				<MoviesCard />
				<MoviesCard />
				<MoviesCard />
				
			</div>
			<div className="movies__button-container">
				<button className="movies__btn" type="button">
					Еще
				</button>
			</div>
		</section>
	)

}

export default MoviesCardList;