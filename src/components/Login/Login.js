import { Link, NavLink } from 'react-router-dom';
import './Login.css';
import Logo from '../../images/logo.png';
import { useFormWithValidation } from '../../hooks/useForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext, useState } from 'react';

function Login({onLogin}) {
	const [disabled, setDisabled] = useState(false);

	const { values, handleChange, errors, isValid } = useFormWithValidation();
	const { isError } = useContext(CurrentUserContext);

	function handleSubmitForm(e) {
		e.preventDefault();
		setDisabled(true);
		if (!isValid) {
			return;
		}
		const { email, password } = values;
		onLogin({ email, password });
	}

	return (
		<main className="login">
       <section className='form'>
			<Link to='/' className="form__logo-link">
				<img className="form__logo" src={Logo} alt='Лого' />
			</Link>
			<h1 className="form__title">Рады видеть!</h1>
			<form className='form__auth' onSubmit={handleSubmitForm}>
				<label className='form-field label'>
					Email
					<input
						type='email'
						className='form-field__input'
						name='email'
						pattern="^\S+@\S+\.\S+$"
						minLength='2'
						maxLength='30'
						required
						placeholder='Email'
						id='email'
						value={values.email || ""}
						onChange={handleChange}

					/>
				</label>
				<span className="form__input-error form__error-login"> {errors.email || ''}</span>
				<label className='form-field label'>
					Пароль
					<input
						type='password'
						className='form-field__input'
						name='password'
						minLength='8'
						maxLength='20'
						required
						placeholder='Пароль'
						id='password'
						value={values.password || ""}
						onChange={handleChange}
					/>
				</label>
				<span className="form__input-error form__error-login">  {errors.password || ''}</span>

				{isError.login && (
					<p className="form__input-error form__error-login">
					{isError.login === 401
						? "Вы ввели неправильный логин или пароль."
						: "При авторизации произошла ошибка."}
					</p>
				)}

				<button
					className='form__btn type__sign'
					type='submit'
					disabled={!isValid || isError.login || disabled}
				>
					Войти
				</button>
				</form>
				<div className='form__advice type__link'
				>
					Еще не зарегистрированы? 
				<NavLink to = '/signup' className='form__advice-link'>Регистрация</NavLink>
				</div>
		</section>
		</main>
	)

}
export default Login;