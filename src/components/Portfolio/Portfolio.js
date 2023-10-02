import './Portfolio.css';


function Portfolio () {
	return (
		 <section className="portfolio" aria-label="">
		 <h2 className="portfolio__title">Портфолио</h2>
		 <ul className="portfolio__links">
		<li className="portfolio__item">
		 <a className="portfolio__link" href="https://sysoev-kirill.github.io/russian-travel/" target="_blank" rel="noreferrer"> Статичный сайт <span className="portfolio__link-arrow">↗</span></a>
		 </li>
		 <li className="portfolio__item">
		 <a className="portfolio__link" href="https://sysoev-kirill.github.io/mesto/" target="_blank" rel="noreferrer">Адаптивный сайт <span className="portfolio__link-arrow">↗</span>
		 </a>
		</li>
		 <li className="portfolio__item">
		 <a className="portfolio__link" href="https://sysoev-kirill.github.io/react-mesto-auth/#/sign-in" target="_blank" rel="noreferrer">Одностраничное приложение <span className="portfolio__link-arrow">↗</span>
		 </a>
		</li>
		</ul>
		</section>
		 );
		}
		

export default Portfolio;

