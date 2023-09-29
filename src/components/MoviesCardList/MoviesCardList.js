import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
	return (

		<section className="movies-card-list">
			<ul className="movies-card-list__box">
			<li className="movies-card-list__item"><MoviesCard /></li>
			<li className="movies-card-list__item"><MoviesCard /></li>
			<li className="movies-card-list__item"><MoviesCard /></li>
			<li className="movies-card-list__item"><MoviesCard /></li>
			<li className="movies-card-list__item"><MoviesCard /></li>
			<li className="movies-card-list__item"><MoviesCard /></li>
			<li className="movies-card-list__item"><MoviesCard /></li>
				
			</ul>
			<div className="movies-card-list__container">
				<button className="movies-card-list__btn" type="button">
					Еще
				</button>
			</div>
		</section>
	)

}

export default MoviesCardList;