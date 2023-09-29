import './MoviesCard.css';
import Card from '../../images/card.jpeg';
import Save from '../../images/save.svg';

function MoviesCard() {
	return (
		<div className='movies-card'>
			<img className="movies-card__img" src={Card} alt="фильм" />
			<div className='movies-card__text'>
				<h2 className="movies-card__title">В погоне за Бэнкси</h2>
				<div className="movies-card__like-box">
					<button className="movies-card__like-button" type="button"></button>
				</div>
			</div>
			<p className="movies-card__time">1ч 42м</p>
		</div>
	)

}
export default MoviesCard;
