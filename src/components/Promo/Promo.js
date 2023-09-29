import './Promo.css'
import banner from "../../images/banner__promo.png";
import { Link } from 'react-router-dom';
function Promo() {

	return (
		<section className='promo'>
							<img className='promo__banner' src={banner} alt="Промо-баннер" />
							<h1 className='promo__title'>Учебный проект студента факультета <nobr>Веб-разработки.</nobr></h1>
							<p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
							<a className='promo__nav' href="#project">Узнать больше</a>
		</section>

	);

}

export default Promo;
