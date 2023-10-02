import './Header.css';
import logo from '../../images/logo.png';
import { Link, Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
import React, { useState } from 'react';

function Header({ loggedIn }) {
   const[nav, setNav] = useState(false);
   
   return (
         <Routes>
            
            <Route path='/' element = {<div className="header header_background">
               <Link to='/'>
                  <img className="header__logo" src={logo} alt="Лого" />
               </Link>
               <Navigation loggedIn={loggedIn} />
            </div>}>
            </Route>
            <Route path='/movies' element = {<div className="header header_light">
               <Link to='/'>
                  <img className="header__logo" src={logo} alt="Лого" />
               </Link>
               <Navigation loggedIn={loggedIn} nav={nav} />
            </div>}>
            </Route>
            <Route path='/saved-movies' element = {<div className="header header_light">
               <Link to='/'>
                  <img className="header__logo" src={logo} alt="Лого" />
               </Link>
               <Navigation loggedIn={loggedIn} nav={nav}/>
            </div>}>
            </Route>
            <Route path='/profile' element = {<div className="header header_light">
               <Link to='/'>
                  <img className="header__logo" src={logo} alt="Лого" />
               </Link>
               <Navigation loggedIn={loggedIn} nav={nav}/>
            </div>}>
            </Route>
         </Routes>
   )
}

export default Header;