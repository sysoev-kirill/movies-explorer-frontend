import { Link, NavLink, useLocation } from "react-router-dom";
import './Navigation.css'
import Profile from '../../images/profile.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useState } from "react";


function Navigation({ loggedIn }) {
   const [isOpen, setIsOpen] = useState(false);

   const handleToggle = () => {
      setIsOpen(!isOpen);
   };

   const location = useLocation();
   const namePath = location.pathname === "/" ? "burger-button" : "burger-button_black";

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
      backgroundColor = "#fff";
      boxShadow = "0px 3px 14px 0px rgba(0, 0, 0, 0.08)";
   } else {
      color = '#fff';
   }


   return (
   
      <nav className="navigation">
         {loggedIn ? (
            <>
               <div className="navigation__container ">
                  <NavLink className="navigation__link" to="/movies" style={{ color }}>
                     Фильмы
                  </NavLink>
                  <NavLink
                     className="navigation__link" to="/saved-movies" style={{ color }}
                  >
                     Сохраненные фильмы
                  </NavLink>
               </div>
               <div className="navigation__profile" style={{ backgroundColor, boxShadow }}>
                  <NavLink
                     className="navigation__link navigation__link_account"
                     to="/profile"
                  >
                     Аккаунт
                  </NavLink>
                  <img className="navigation__profile-icon" src={Profile} alt="иконка аккаунта" />
               </div>

               <button onClick={handleToggle} className={namePath} ></button>
            
               </>
         ) : (
            <>
            <NavLink className="navigation__link-register" to='/signup' style={{ color }}>
               Регистрация
            </NavLink>
            <NavLink className="navigation__link-login" to='/signin'>
               Войти
            </NavLink>
            </>
         )}
         <BurgerMenu isOpen = {isOpen} toggleMenu = {handleToggle}/>

</nav>

   )
}

export default Navigation;
