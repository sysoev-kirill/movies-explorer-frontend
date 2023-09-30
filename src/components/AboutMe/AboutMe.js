import './AboutMe.css';


function AboutMe() {

	return (
		<section className="about__me">
			<h2 className="section__title ">Студент</h2>
			<div className='about__me-wrapper'>
				<div className='about__me-description'>
					<h3 className='about__me-title'>Кирилл</h3>
					<p className='about__me-text'>Фронтенд-разработчик</p>
					<p className='about__me-info'>Я – Дункан Маклауд, родился четыреста лет назад в горах Шотландии. Я один из Бессмертных. Веками мы ждали времени Сбора, когда под ударами мечей падут головы и польется животворящая сила. В конце останется только один».</p>
					<a className='about__me-social' href='/'>Github</a>
				</div>
				<div className='about__me-image'>
				</div>
			</div>
		</section>

	)
}
export default AboutMe;                                                                                                                    