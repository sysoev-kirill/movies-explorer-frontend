import './Promo.css'
import banner from "../../images/banner__promo.png";
import { Link } from 'react-router-dom';
function Promo() {

	return (
		<section className='promo'>
							<img className='promo__about-banner' src={banner} alt="Промо-баннер" />
							<h1 className='promo__about-title'>Учебный проект студента факультета <nobr>Веб-разработки.</nobr></h1>
							<p className='promo__about-text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
							<a className='promo__about-nav' href="#project">Узнать больше</a>




			{/* <div className='promo__about'>
				<div className='promo__about-box'>
					<h1 className='promo__about-title'>Учебный проект студента факультета Веб-разработки.</h1>
					<p className='promo__about-text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
				</div>
				<img className='promo__about-banner' src={banner} alt="Промо-баннер" />
			</div>
			<Link className='promo__about-nav' to="/#">Узнать больше</Link> */}
		</section>

	);

}

export default Promo;
