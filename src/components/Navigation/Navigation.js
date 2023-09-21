import { Link, useLocation } from "react-router-dom";
import './Navigation.css'
import Profile from '../../images/profile.svg';
import { useState } from "react";


function Navigation({ loggedIn }) {
   const [isOpen, setIsOpen] = useState(false);

   const handleToggle = () => {
      setIsOpen(!isOpen);
   };

   const location = useLocation();
   const namePath = location.pathname === "/" ? "burger-button__main" : "burger-button";

   let backgroundColor;
   let color;
   let boxShadow;
   if (location.pathname === '/movies') {
      color = '#000';
      backgroundColor = "#fff";
      boxShadow = "0px 3px 14px 0px rgba(0, 0, 0, 0.08)";
   } else if (location.pathname === '/saved-movies') {
      color = '#000';
      backgroundColor = "#fff";
      boxShadow = "0px 3px 14px 0px rgba(0, 0, 0, 0.08)";
   } else if (location.pathname === '/profile') {
      color = '#000';
   } else {
      color = '#fff';
   }


   return (
   
      <nav className="navigation__main">
         {loggedIn ? (
            <>
               <div className="navigation__container ">
                  <Link className="navigation__link type__movies" to="/movies" style={{ color }}>
                     Фильмы
                  </Link>
                  <Link
                     className="navigation__link type__favorite"
                     to="/saved-movies"
                     style={{ color }}
                  >
                     Сохраненные фильмы
                  </Link>
               </div>
               <div className="navigation__profile" style={{ backgroundColor, boxShadow }}>
                  <Link
                     className="navigation__link type__account"
                     to="/profile"
                  >
                     Аккаунт
                  </Link>
                  <img className="navigation__profile-icon" src={Profile} alt="иконка аккаунта" />
               </div>

               {/* <button onClick={handleToggle} className="burger-button" ></button> */}
               <button onClick={handleToggle} className={namePath} ></button>
            
               </>
         ) : (
            <>
            <Link className="navigation__link-register" to='/signup' style={{ color }}>
               Регистрация
            </Link>
            <Link className="navigation__link-login" to='/signin'>
               Войти
            </Link>
            </>
         )}

         <div className="navigation__burger">
            {isOpen && (
               <>
                  <div className="burger__type">
                     <ul className="burger__type-list">
                        <Link to="/" className="burger__type-item" onClick={handleToggle}>Главная</Link>
                        <Link to="/movies" className="burger__type-item" onClick={handleToggle}>Фильмы</Link>
                        <Link to="/saved-movies" className="burger__type-item" onClick={handleToggle}>Сохраненные фильмы</Link>
                     </ul>

                     <div className="navigation__profile burger">
                        <Link
                           className="navigation__link type__account "
                           to="/profile"
                        >
                           Аккаунт
                        </Link>
                        <img className="navigation__profile-icon" src={Profile} alt="иконка аккаунта" />
                     </div>

                     <button onClick={handleToggle} className="button__cancel" ></button>
                  </div>
               </>

            )}
         </div>
</nav>

   )
}

export default Navigation;
