import './Footer.css'
function Footer() {

	return (
		<footer className="footer ">
			<h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
			<div className="footer__container">
				<p className="footer__year"> © {new Date().getFullYear()}</p>
				<ul className="footer__link-wrapper">
					<li className="footer__link">
						<a className="footer__link-social" href='https://praktikum.yandex.ru'>Яндекс.Практикум</a>
					</li>
					<li className="footer__link">
						<a className="footer__link-social" href="https://github.com/sysoev-kirill?tab=repositories"> Github</a>
					</li>

				</ul>
			</div>
		</footer>

	)

}
export default Footer;