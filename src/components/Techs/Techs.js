import './Techs.css'

function Techs() {
	return (
		<section className='techs'>
			<h2 className="section__title ">Технологии</h2>
			<div className='techs_container'>
				<h3 className='techs_container-title'>7 технологий</h3>
				<p className='techs_container-text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
			</div>
			<ul className='techs__items'>
				<li className='techs__description'>HTML</li>
				<li className='techs__description'>CSS</li>
				<li className='techs__description'>JS</li>
				<li className='techs__description'>React</li>
				<li className='techs__description'>Git</li>
				<li className='techs__description'>Express.js</li>
				<li className='techs__description'>mongoDB</li>
			</ul>


		</section>

	)

}

export default Techs;