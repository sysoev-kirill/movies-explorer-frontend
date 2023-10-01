import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import successAuth from "../../images/success-auth.svg";
import badAuth from "../../images/bad-auth.svg";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { IMAGE_PUTH } from "../../utils/constants";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const ifMovies = location.pathname === "/movies";
  // User
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  //Movies
  const [saveMovies, setSaveMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  // Others
  const [isLoading, setIsLoading] = useState(false);
  const [messageTooltip, setMessageTooltip] = useState({
    imgIcon: "",
    text: "",
  });
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isError, setIsError] = useState({});
  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      tokenCheck();
    } else {
      setLoggedIn(false);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (currentUser?._id) {
      setLoggedIn(true);
      Promise.all([getSaveMovies(), getMovies()]).then(([saved, movies]) => {
        localStorage.setItem(`Movies`, JSON.stringify(movies));

        const mySavedMovies = saved.filter(
          (movie) => movie.owner === currentUser._id
        );

        setAllMovies(
          movies.map((movie) => ({
            ...movie,
            image: `${IMAGE_PUTH}/${movie.image.url}`,
            thumbnail: `${IMAGE_PUTH}/${movie.image.formats.thumbnail.url}`,
          }))
        );
        setSaveMovies(mySavedMovies);
      });
    }
  }, [currentUser]);

  useEffect(() => {
    let newMovies = allMovies.map((item) => {
      if (item._id) {
        delete item._id;
      }
      return item;
    });
    if (saveMovies.length > 0) {
      newMovies = allMovies.map((movie) => {
        const saved = saveMovies.find((save) => save.movieId === movie.id);

        if (saved) {
          movie._id = saved._id;
        }
        return movie;
      });
    }
    setAllMovies(newMovies);
  }, [saveMovies]);
  // Movies
  const getMovies = () => {
    const data = localStorage.getItem(`Movies`);

    if (data && JSON.parse(data).length > 0) {
      const clearData = JSON.parse(data).map((item) => {
        delete item._id;
        return item;
      });
      return Promise.resolve(clearData);
    } else {
      return moviesApi.getMovies();
    }
  };

  function getSaveMovies() {
    const data = localStorage.getItem(`savedMovies`);

    if (data && JSON.parse(data).length > 0) {
      return Promise.resolve(JSON.parse(data));
    } else {
      return mainApi.getUserMovies().then((res) => res.data);
    }
  }

  // обработчик добавления фильма в избранное
  function handleSaveMovie(movie) {
    mainApi
      .addMovie(movie)
      .then((newMovie) => {
        setSaveMovies((prev) => [newMovie, ...prev]);
      })
      .catch((err) => console.log(err));
  }

  //   // обработчик удаления фильма из избранного
  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovieById(movie._id)
      .then(() => {
        const newMoviesList = saveMovies.filter((m) =>
          m._id === movie._id ? false : true
        );
        setSaveMovies(newMoviesList);
      })
      .catch((err) => console.log(err));
  }
  // User

  function closePopup() {
    setIsInfoTooltipOpen(false);
    // document.removeEventListener('keydown', handleEscClose);
  }

  function handleRegister({ name, email, password }) {
    mainApi
      .register(name, email, password)
      .then((data) => {
        if (data) {
          setIsInfoTooltipOpen(true);
          setMessageTooltip({
            text: "Вы успешно зарегистрировались!",
            imgIcon: successAuth,
          });
          handleLogin({email, password});
        }
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        createErrorUser("register", err);
        setMessageTooltip({
          text: "Что-то пошло не так! Попробуйте еще раз.",
          imgIcon: badAuth,
        });
      })
      .finally(() => setIsInfoTooltipOpen(true));
  }

  function handleLogin({ email, password }) {
    mainApi
      .authorize(email, password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        tokenCheck();
      })
      .catch((err) => {
        createErrorUser("login", err);
        console.log(err);
      });
  }

  function tokenCheck() {
    const pathname = location.pathname;
    const token = localStorage.getItem("token");
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          setCurrentUser(res);
          setLoggedIn(true);
          if (pathname === "/signup" || pathname === "/signin") {
            navigate("/movies", { replace: true });
          } else {
            navigate(pathname, { replace: true });
          }
          return res;
        })
        .catch((err) => {
          createErrorUser("auth", err);
          console.log(err);
        })
        .finally(setIsLoading(false));
    }
  }

  function handleSignOut() {
    localStorage.clear();
    navigate("/signin");
    setLoggedIn(false);
    setCurrentUser({});
    setSaveMovies([]);
    setAllMovies([]);
    setMessageTooltip({
      imgIcon: "",
      text: "",
    });
  }

  function handleUpdateInfoUser(data) {
    setIsLoading(true);
    mainApi
      .editUserProfileInfo(data)
      .then((res) => {
        setCurrentUser(res.data);
        setIsInfoTooltipOpen(true);
        setMessageTooltip({
          text: "Данные успешно изменены!",
          imgIcon: successAuth,
        });
        setLoggedIn(true);
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        createErrorUser("updateUser", err);
        setMessageTooltip({
          text: "При обновлении профиля произошла ошибка",
          imgIcon: badAuth,
        });
      })
      .finally(() => setIsLoading(false));
  }

  function createErrorUser(name, text) {
    setIsError((prev) => ({ ...prev, [name]: text }));
    setTimeout(
      (isError) => {
        delete isError[name];
        setIsError({ ...isError });
      },
      3000,
      isError
    );
  }

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        isLoading,
        ifMovies,
        isError,
        allMovies,
        saveMovies,
        handleSaveMovie,
        handleDeleteMovie,
      }}
    >
      <div className="page">
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route
            path="/movies"
            element={
              <ProtectedRouteElement element={Movies} loggedIn={loggedIn} />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                element={SavedMovies}
                loggedIn={loggedIn}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                element={Profile}
                loggedIn={loggedIn}
                onSignOut={handleSignOut}
                onUpdateInfoUser={handleUpdateInfoUser}
              />
            }
          />

          <Route
            path="/signin"
            element={
              loggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/signup"
            element={
              loggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <Register onRegister={handleRegister} />
              )
            }
          />

          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
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
