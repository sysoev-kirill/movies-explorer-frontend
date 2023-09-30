import { Link } from 'react-router-dom';
import './Login.css';
import Logo from '../../images/logo.png';
import { useState } from 'react';

function Login({onLogin}) {

	const [formValue, setFormValue] = useState({
		email: '',
		password: '',
	})
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormValue({
			...formValue,
			[name]: value
		});
		setErrors({...errors, [name]: e.target.validationMessage});
	}


	function handleSubmitForm(e) {
		e.preventDefault();
		if (!formValue.email || !formValue.password) {
			return;
		}
		const { email, password } = formValue;
		onLogin({ email, password });
	}

	return (
		<section className="login__section">
			<Link to='/' className="register__logo-link">
				<img className="register__logo" src={Logo} alt='Лого' />
			</Link>
			<h1 className="register__title">Рады видеть!</h1>
			<form className='login__form' onSubmit={handleSubmitForm}>
				<label className='login__label label'>
					Email
					<input
						type='email'
						className='login__input'
						name='email'
						minLength='2'
						maxLength='30'
						required
						placeholder='Email'
						id='email'
						value={formValue.email || ""}
						onChange={handleChange}

					/>
				</label>
				<span className="form__input-error form__error-login"> {errors.email || ''}</span>
				<label className='login__label label'>
					Пароль
					<input
						type='password'
						className='login__input'
						name='password'
						minLength='2'
						maxLength='20'
						required
						placeholder='Пароль'
						id='password'
						value={formValue.password || ""}
						onChange={handleChange}
					/>
				</label>
				<span className="form__input-error form__error-login">  {errors.password || ''}</span>
				<button
					className='login__btn type__sign'
					type='submit'
				>
					Войти
				</button>
				<div className='login__btn type__link'
				>
					Еще не зарегистрированы? 
				<Link to = '/signup' className='register__btn-link'>Регистрация</Link>
				</div>

			</form>

		</section>
	)

}
export default Login;