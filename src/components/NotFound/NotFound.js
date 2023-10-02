
import './NotFound.css';
import { useNavigate } from "react-router-dom";

function NotFound() {
	const navigate = useNavigate();
	return (
		<main className="notfound">
			<div className="notfound__block">
				<h1 className="notfound__title">
					404
				</h1>
				<p className="notfound__text">
					Страница не найдена
				</p>
				<span onClick={() => navigate(-1)} className='notfound__button'>Назад</span>
		</div>
		</main>
	)

}
export default NotFound;