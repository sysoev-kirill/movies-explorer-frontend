import "./Register.css";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import { useContext } from "react";
import { useFormWithValidation } from "../../hooks/useForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Register({ onRegister }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const { isError } = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = values;
    if (!isValid) {
      return;
    }
    onRegister({ name, email, password });
  }

  return (
    <main className="register">
      <section className="form">
        <Link to="/" className="form__logo-link">
          <img className="form__logo" src={Logo} alt="Лого" />
        </Link>
        <h1 className="form__title">Добро пожаловать!</h1>
        <form className="form__auth" onSubmit={handleSubmit}>
          <label className="form-field label">
            Имя
            <input
              type="text"
              className="form-field__input"
              name="name"
              minLength="2"
              maxLength="30"
              required
              placeholder="Имя"
              id="name"
              value={values.name || ""}
              onChange={handleChange}
            />
          </label>
          <span className="form__input-error form__error-register">
            {errors.name || ""}
          </span>
          <label className="form-field label">
            Email
            <input
              type="email"
              className="form-field__input"
              name="email"
			  pattern="^\S+@\S+\.\S+$"
              minLength="2"
              maxLength="30"
              required
              placeholder="Email"
              id="email"
              value={values.email || ""}
              onChange={handleChange}
            />
          </label>
          <span className="form__input-error form__error-register">
            {" "}
            {errors.email || ""}
          </span>
          <label className="form-field label">
            Пароль
            <input
              type="password"
              className="form-field__input"
              name="password"
              minLength="8"
              maxLength="20"
              required
              placeholder="Пароль"
              id="password"
              value={values.password || ""}
              onChange={handleChange}
            />
          </label>
          <span className="form__input-error form__error-register">
            {" "}
            {errors.password || ""}
          </span>
          {isError.register && (
            <p className="form__input-error form__error-register">
              {isError.register === 409
                ? "Пользователь с таким email уже сущетсвует"
                : "При регистрации пользователя произошла ошибка"}
            </p>
          )}
          <button
            className="form__btn type__sign"
            type="submit"
            disabled={!isValid || isError.register}
          >
            Зарегистрироваться
          </button>
        </form>
        <div className="form__advice type__link">
          Уже зарегистрированы?
          <Link to="/signin" className="form__advice-link">
            Войти
          </Link>
        </div>
      </section>
    </main>
  );
}
export default Register;
