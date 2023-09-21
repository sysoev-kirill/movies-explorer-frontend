import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
	return (
		<div className="notfound__page">
			<div className="notfound">
				<h2 className="notfound__title">
					404
				</h2>
				<p className="notfound__text">
					Страница не найдена
				</p>
				<Link to='/' className='button__back'>Назад</Link>
			</div>
		</div>
	)

}
export default NotFound;