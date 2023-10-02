import './AboutMe.css';


function AboutMe() {

	return (
		<section className="about-me">
			<h2 className="about-me__heading">Студент</h2>
			<div className='about-me__wrapper'>
				<div className='about-me__description'>
					<h3 className='about-me__name'>Кирилл</h3>
					<p className='about-me__text'>Фронтенд-разработчик</p>
					<p className='about-me__info'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
					<a className='about-me__social' href='/'>Github</a>
				</div>
				<div className='about-me__image'>
				</div>
			</div>
		</section>

	)
}
export default AboutMe;                                                                                                                    