import { Link } from 'react-router-dom';
import './Login.css';
import Logo from '../../images/logo.png';

function Login() {
	return (
		<section className="login">
       <div className='form'>
			<Link to='/' className="form__logo-link">
				<img className="form__logo" src={Logo} alt='Лого' />
			</Link>
			<h1 className="form__title">Добро пожаловать!</h1>
			<form className='form__auth'>
				<label className='form-field label'>
					Email
					<input
						type='email'
						className='form-field__input'
						name='email'
						minLength='2'
						maxLength='30'
						required
						placeholder='Email'
						id='email'
					/>
				</label>
				<label className='form-field label'>
					Пароль
					<input
						type='password'
						className='form-field__input'
						name='password'
						minLength='2'
						maxLength='20'
						required
						placeholder='Пароль'
						id='password'
					/>
				</label>
				<button
					className='form__btn type__sign'
					type='button'
				>
					Войти
				</button>
				</form>
				<div className='form__advice type__link'
				>
					Еще не зарегистрированы?
				<Link to = '/signin' className='form__advice-link'>Регистрация</Link>
				</div>
			</div>

			{/* <Link to='/' className="register__logo-link">
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

			</form> */}

		</section>
	)

}
export default Login;