import { Link } from 'react-router-dom';
import './Login.css';
import Logo from '../../images/logo.png';

function Login() {
	return (
		<section className="login__section">
			<Link to='/' className="register__logo-link">
				<img className="register__logo" src={Logo} alt='Лого' />
			</Link>
			<h1 className="register__title">Рады видеть!</h1>
			<form className='login__form'>
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
					/>
				</label>
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
					/>
				</label>
				<button
					className='login__btn type__sign'
					type='button'
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