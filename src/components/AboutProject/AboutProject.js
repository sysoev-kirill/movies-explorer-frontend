import './AboutProject.css';

function AboutProject () {
return (
<section className="about-project" id="project">
<h2 className="section__title ">О проекте</h2>
<div className="about-project__box ">
   <div className="about-project__description">
		<h3 className="about-project__desc-item">Дипломный проект включал 5 этапов</h3>
		<p className="about-project__desc-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
	</div>
	<div className="about-project__description">
		<h3 className="about-project__desc-item">На выполнение диплома ушло 5 недель</h3>
		<p className="about-project__desc-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
	</div>
	
</div>
<div className="about-project-periods">
		<p className="about-project__period about-project__period_time">1 неделя</p>
		<p className="about-project__period about-project__period_time-long">4 недели</p>
		<p className="about-project__about">Back-end</p>
		<p className="about-project__about">Front-end</p>
	</div>
</section>

)


}

export default AboutProject;