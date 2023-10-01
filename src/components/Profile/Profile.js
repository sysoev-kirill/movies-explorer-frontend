import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useForm";

function Profile({ onSignOut, onUpdateInfoUser }) {
  const { currentUser, isError } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const [isChanged, setIsChanged] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (currentUser?.name) {
      resetForm({ name: currentUser.name, email: currentUser.email });
    }
  }, [currentUser]);

  useEffect(() => {
    if (isError.updateUser === 400) {
      resetForm({ name: currentUser.name, email: currentUser.email });
    }
  }, [isError.updateUser, currentUser]);

  useEffect(() => {
    setIsChanged(
      currentUser.name !== values.name || currentUser.email !== values.email
    );
  }, [values, currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsChanged(false);
	setIsActive(false);
    onUpdateInfoUser({
      name: values.name,
      email: values.email,
    });
  }

  function handleEditeClick() {
    setIsActive(true);
  }

  return (
    <main className="profile__section">
      <section className="profile__container">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form
          className="profile__form"
          onSubmit={handleSubmit}
          noValidate={true}
        >
          <label className="profile__label">
            Имя
            <input
              type="text"
              className="profile__input"
              name="name"
              minLength="2"
              maxLength="30"
              required
              placeholder="Имя"
              id="name"
              title="Разрешено использовать латиницу, кириллицу, пробел или дефис"
              value={values.name || ""}
              disabled={!isActive}
              onChange={handleChange}
            />
          </label>
          <span className="form__input-error form__error-profile">
            {errors.name || ""}
          </span>
          <label className="profile__label">
            Email
            <input
              type="email"
              className="profile__input"
              name="email"
			  pattern="^\S+@\S+\.\S+$"
              minLength="2"
              maxLength="30"
              required
              placeholder="Email"
              value={values.email || ""}
              id="email"
              disabled={!isActive}
              onChange={handleChange}
            />
          </label>
          <span className="form__input-error form__error-profile">
            {errors.email || ""}
          </span>
		  {isError.updateUser && (
          <p className="form__input-error form__error-profile">
            {isError.updateUser === 400
              ? "При обновлении профиля произошла ошибка"
              : "Пользователь с таким email уже сществует"}
          </p>
        )}
          {isActive ? (
            <button
              className="profile__btn type__save"
              type="submit"
              disabled={!(isChanged && isValid)}
            >
              Сохранить
            </button>
          ) : (
            <>
              <button
                className="profile__btn type__edit"
                type="button"
                onClick={handleEditeClick}
              >
                Редактировать
              </button>
              <Link
                to="/"
                className="profile__btn type__logout"
                onClick={onSignOut}
              >
                Выйти из аккаунта
              </Link>
            </>
          )}
        </form>
      </section>
    </main>
  );
}

export default Profile;
