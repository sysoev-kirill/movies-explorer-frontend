import './App.css';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies.js/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import successAuth from "../../images/success-auth.svg";
import badAuth from "../../images/bad-auth.svg";
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {

const [loggedIn, setLoggedIn] = useState(false);
// const [currentUser, setCurrentUser] =  useState({});
const [currentUser, setCurrentUser] = useState({
  name: "",
  email: "",
  _id: ""
});

const [saveMovies, setSaveMovies] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [messageTooltip, setMessageTooltip] = useState({ imgIcon: "", text: "" });
const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
const [isProfileEdit, setIsProfileEdit] = useState(false);
const [isProfileLoading, setIsProfileLoading] = useState(false);
const navigate = useNavigate();

// const [infoMessage, setInfoMessage] = useState({
//   isShown: false,
//   message: '',
//   code: 200,
// });


useEffect(() => {
  tokenCheck();
}, [])

// useEffect(() => {
//   if (loggedIn) {
//     Promise.all([mainApi.getInfoAboutUser(), mainApi.getUserMovies()])
//   .then(([currentUser, data]) => {
//     const userMovies = data.filter((m) => m.owner === currentUser._id);
//     setCurrentUser(currentUser);
//     setSaveMovies(userMovies);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// }

// },[loggedIn]);

 useEffect(() => {
    if (loggedIn) {
      mainApi.getInfoAboutUser()
        .then((currentUser) => (
          setCurrentUser(currentUser)
        ))
        .catch((err) => console.log(err))
    }
  }, [loggedIn])

  // useEffect(() => {
  //   if (loggedIn) {
  //     mainApi.getUserMovies()
  //       .then((res) => (
  //         setSaveMovies(res)
  //       ))
  //       .catch((err) => console.log(err))
  //   }
  // }, [loggedIn])

// async function handleSearchMovies() {
//   setIsLoading(true);
//   // setSearchError(false);
//   try {
//     const result = moviesApi.getMovies()
//     if (result) {
//       return result
//     }
//   } catch (err) {
//     console.log(err)
//   } finally {
//     setIsLoading(false)
//   }
// }

  // обработчик добавления фильма в избранное
// function handleSaveMovie({movie}){
//   mainApi.addMovie(movie)
//     .then((newMovie) => {
//       setSaveMovies([newMovie, ...saveMovies]);
//      
//     })
  
//     .catch(err => console.log(err))
  
// };



//   // обработчик удаления фильма из избранного
//   function handleDeleteMovie(movie){
//     mainApi.deleteMovieById(movie._id)
//       .then(() => {
//         const newMoviesList = saveMovies.filter((m) => m._id === movie._id ? false : true);
//         setSaveMovies(newMoviesList);
//       })
//       .catch(err => console.log(err))
//   };

// function handleSaveMovie(movie) {
//   mainApi.addMovie({
//     country: movie.country,
//     director: movie.director,
//     duration: movie.duration,
//     year: movie.year,
//     description: movie.description,
//     image: movie.image,
//     trailerLink: movie.trailerLink,
//     nameRU: movie.nameRU,
//     nameEN: movie.nameEN,
//     thumbnail: movie.thmbnail,
//     movieId: movie.id,
//     })
//     .then((newMovie) => {
//       const movies = JSON.parse(localStorage.getItem('Movies') || "[]")
//       const newMovies = [...movies, newMovie]
//       localStorage.setItem('SaveMovies', JSON.stringify(newMovies))
//       setSaveMovies(JSON.parse(localStorage.getItem('SaveMovies')))
//     })
//     .catch((err) => {console.log(err)}); 
//   }

    // function handleDeleteMovie(movie) {
    //   const movies = JSON.parse(localStorage.getItem('SaveMovies'))
    //   const savedMovie = movies.find(
    //     (card) => card.movieId === movie.id || card.movieId === movie.movieId
    //   );
    //   mainApi.deleteMovieById(savedMovie._id)
    //     .then(() => {
    //       const savingMovies = movies.filter((card) => card._id !== savedMovie._id)
    //       localStorage.setItem('SavedMovies', JSON.stringify(savingMovies))
    //       setSaveMovies(JSON.parse(localStorage.getItem('SaveMovies')))
    //     })
    //     .catch((err) => {console.log(err)}); 
    // } 
  


// function handleSearchMovie(movie, checked) {
//   if (movies.length !== 0) {
//     const searchMovies = movies.filter((item) =>
//       item.nameRU.toLowerCase().includes(movie.toLowerCase())
//     );
//     if (searchMovies.length === 0) {
//       setIsTooltipPopupOpen(true);
//       setPopupText("По вашему запросу ничего не найдено..");
//       setSuccess(false);
//     } else {
//       setCheckboxStatus(false);
//       localStorage.setItem("movieName", movie);
//       localStorage.setItem("searchedMovies", JSON.stringify(searchMovies));
//       localStorage.setItem("checkboxStatus", JSON.stringify(checked));
//       setFoundMovies(searchMovies);
//     }
//     return;
//   } else {
//     setPreloaderStatus(true);
//     moviesApi
//       .getMovies()
//       .then((moviesFromSearch) => {
//         const searchMovies = moviesFromSearch.filter((item) =>
//           item.nameRU.toLowerCase().includes(movie.toLowerCase())
//         );
//         if (searchMovies.length === 0) {
//           setIsTooltipPopupOpen(true);
//           setPopupText("По вашему запросу ничего не найдено.");
//           setSuccess(false);
//         } else {
//           setCheckboxStatus(false);
//           localStorage.setItem("allMovies", JSON.stringify(moviesFromSearch));
//           setAllMovies(moviesFromSearch);
//           localStorage.setItem("movieName", movie);
//           localStorage.setItem(
//             "searchedMovies",
//             JSON.stringify(searchMovies)
//           );
//           localStorage.setItem("checkboxStatus", JSON.stringify(checked));
//           setFoundMovies(searchMovies);
//         }
//       })
//       .catch((err) => console.log(err))
//       .finally(() => setPreloaderStatus(false));
//   }
// }

// function handleSearchSavedMovie(query, checkbox) {
//   setPreloaderStatus(true);
//   const searchMovies = savedMovies.filter((item) =>
//     item.nameRU.toLowerCase().includes(query.toLowerCase())
  // );
  // if (searchMovies.length === 0) {
  //   setIsTooltipPopupOpen(true);
  //   setPopupText("По вашему запросу ничего не найдено.");
  //   setSuccess(false);
  //   setPreloaderStatus(false);
  // } else {
  //   setCheckboxStatus(false);
  //   localStorage.setItem("checkboxStatus", JSON.stringify(checkbox));
  //   setSavedMovies(searchMovies);
  //   setPreloaderStatus(false);
  // }
  function handleEditProfile() {
    setIsProfileEdit(true);
  }

  function handleEscClose(event) {
    if (event.key === 'Escape') {
      closePopup();
    }
  }
  function closePopup() {
    setIsInfoTooltipOpen(false);
    // document.removeEventListener('keydown', handleEscClose);

  }


  function handleRegister({name, email, password}) {
  mainApi.register(name, email, password)
      .then((data) => { 
        if (data) {
          setIsInfoTooltipOpen(true);
          setMessageTooltip({
          text: "Вы успешно зарегистрировались!",
          imgIcon: successAuth
        });
          handleLogin(email, password);
          setLoggedIn(true);
          navigate("/movies", {replace: true})
        }
        })
        .catch(() => {
          setIsInfoTooltipOpen(true);
          setMessageTooltip({
            text: "Что-то пошло не так! Попробуйте еще раз.",
            imgIcon: badAuth
          })
        })
        .finally(() => setIsInfoTooltipOpen(true))
  }

  function handleLogin({email, password}) {
    mainApi.authorize(email, password)
      .then((res) => {
        console.log(res);
        // setCurrentUser(res)
        localStorage.setItem('token', res.token);
        tokenCheck();
        setLoggedIn(true);
        navigate("/movies")
    })
      .catch(err => {
        console.log(err);
      });
  }

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.checkToken(token)
        .then((res) => {
          console.log(res);
          setCurrentUser(res);
          setLoggedIn(true);
          // navigate('/', { replace: true });
          return res;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

function handleSignOut () {
  localStorage.removeItem('token');
  setLoggedIn(false);
  navigate('/signin');
}

function handleUpdateInfoUser(data) {
  setIsLoading(true);
  mainApi.editUserProfileInfo(data)
    .then((res) => {
      setCurrentUser(res.data);
      setIsInfoTooltipOpen(true);
          setMessageTooltip({
          text: "Данные успешно изменены!",
          imgIcon: successAuth
        });
      setLoggedIn(true);
    })
    .catch((err) => {
      setIsInfoTooltipOpen(true);
          setMessageTooltip({
            text: "При обновлении профиля произошла ошибка",
            imgIcon: badAuth
          })
    })
    .finally(() => setIsLoading(false));
}

 // обработчик сброса вывода сообщения с сервера
//  function handleClickResetInfoMessage() {
//   if (infoMessage.isShown){
//     setInfoMessage({
//       ...infoMessage,
//       isShown: false,
//       message: '',
//       type: '',
//       code: 200,
//     });
//   }
// };


return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header
      loggedIn={loggedIn}
      />
      <Routes>
          <Route path="/" element={<Main 
          />} />
          
          <Route path="/movies" element={
          <Movies 
          // onSearch={handleSearchMovies}
          isLoading={isLoading}
          saveMovies={saveMovies}
          // onSaveMovie={handleSaveMovie}
          // onDeleteMovie={handleDeleteMovie}
          />} />

          <Route path="/saved-movies" element={
          <SavedMovies 
          // onSaveMovie={handleSaveMovie}
          // onDeleteMovie={handleDeleteMovie}
          />} />

          <Route path="/profile" element={
          <Profile 
          onSignOut = {handleSignOut}
          onUpdateInfoUser = {handleUpdateInfoUser}
          isEdit={isProfileEdit}
          isLoading={isProfileLoading}
          onEditProfile={handleEditProfile}
          // infoMessage = {infoMessage}
          />} />

          <Route path="/signin" element={
          <Login 
          onLogin = {handleLogin}
          // loggedIn={loggedIn}
          />} />

          <Route path="/signup" element={
          <Register 
          onRegister={handleRegister}
          // loggedIn={loggedIn}
          />} />
          
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        
      <Footer/>
      <InfoTooltip
          title={messageTooltip.text}
          isOpen={isInfoTooltipOpen}
          onClose={closePopup}
          image={messageTooltip.imgIcon}
        />


      </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
