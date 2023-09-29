import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
	return (
		<main className="notfound__page">
			<div className="notfound">
				<h1 className="notfound__title">
					404
				</h1>
				<p className="notfound__text">
					Страница не найдена
				</p>
				<Link to='/' className='button__back'>Назад</Link>
			</div>
		</main>
	)

}
export default NotFound;