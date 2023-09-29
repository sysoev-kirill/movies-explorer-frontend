import './Techs.css'

function Techs() {
	return (
		<section className='techs'>
			<h2 className="section__title ">Технологии</h2>
			<div className='techs__container'>
				<h3 className='techs__title'>7 технологий</h3>
				<p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
			</div>
			<ul className='techs__items'>
				<li className='techs__item-description'>HTML</li>
				<li className='techs__item-description'>CSS</li>
				<li className='techs__item-description'>JS</li>
				<li className='techs__item-description'>React</li>
				<li className='techs__item-description'>Git</li>
				<li className='techs__item-description'>Express.js</li>
				<li className='techs__item-description'>mongoDB</li>
			</ul>


		</section>

	)

}

export default Techs;