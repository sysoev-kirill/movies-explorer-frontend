import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
	return (
		<main className="notfound">
			<div className="notfound__block">
				<h1 className="notfound__title">
					404
				</h1>
				<p className="notfound__text">
					Страница не найдена
				</p>
				<Link to='/' className='notfound__button'>Назад</Link>
			</div>
		</main>
	)

}
export default NotFound;