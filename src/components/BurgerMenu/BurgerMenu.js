
import { Link } from 'react-router-dom';
import './BurgerMenu.css'
import Profile from '../../images/profile.svg';

function BurgerMenu ({isOpen, toggleMenu}) {

return (

<div className="burger-menu">
   
            {isOpen && (
               <>
            <div className='burger-menu__background'>
                  <div className="burger-menu__container">
                     <ul className="burger-menu__list">
                        <Link to="/" className="burger-menu__item" onClick={toggleMenu}>Главная</Link>
                        <Link to="/movies" className="burger-menu__item" onClick={toggleMenu}>Фильмы</Link>
                        <Link to="/saved-movies" className="burger-menu__item" onClick={toggleMenu}>Сохраненные фильмы</Link>
                     </ul>

                     <div className="navigation__profile burger-menu__btn "onClick={toggleMenu}>
                        <Link
                           className="navigation__link type__account "
                           to="/profile"
                        >
                           Аккаунт
                        </Link>
                        <img className="navigation__profile-icon" src={Profile} alt="иконка аккаунта" />
                     </div>

                     <button onClick={toggleMenu} className="burger-menu__close" ></button>
                  </div>
                  </div>
               </>
               
            )}
         </div>
        
)

}

export default BurgerMenu;