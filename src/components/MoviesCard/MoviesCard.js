import './MoviesCard.css';
import Card from '../../images/card.jpeg';
import Save from '../../images/save.svg';

function MoviesCard() {
	return (
		<div className='movie__card'>
			<img className="movie__card-img" src={Card} alt="фильм" />
			<div className='movie__card-text'>
				<h2 className="movie__card-title">В погоне за Бэнкси</h2>
				<div className="movie__card-like-box">
					<button className="movie__like-button" type="button"></button>
				</div>
			</div>
			<p className="movie__card-time">1ч 42м</p>
		</div>
	)

}
export default MoviesCard;
