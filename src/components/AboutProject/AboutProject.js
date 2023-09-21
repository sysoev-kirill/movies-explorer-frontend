import './AboutProject.css';

function AboutProject () {
return (
<section className="project__section" id="project">
<h2 className="section__title ">О проекте</h2>
<div className="project__section-box ">
   <div className="project__section-description">
		<h3 className="project__desc-item">Дипломный проект включал 5 этапов</h3>
		<p className="project__desc-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
	</div>
	<div className="project__section-description">
		<h3 className="project__desc-item">На выполнение диплома ушло 5 недель</h3>
		<p className="project__desc-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
	</div>
	
</div>
<div className="project__section-period">
		<p className="project__period project__time">1 неделя</p>
		<p className="project__period project__time-long">4 недели</p>
		<p className="project__about project__about">Back-end</p>
		<p className="project__about project__about">Front-end</p>
	</div>
</section>

)


}

export default AboutProject;