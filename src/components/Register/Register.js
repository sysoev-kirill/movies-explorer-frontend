import './Register.css'
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';

function Register() {
	return (
		<section className="register__section">
			<Link to='/' className="register__logo-link">
				<img className="register__logo" src={Logo} alt='Лого' />
			</Link>
			<h1 className="register__title">Добро пожаловать!</h1>
			<form className='register__form'>
				<label className='register__label label'>
					Имя
					<input
						type='text'
						className='register__input'
						name='name'
						minLength='2'
						maxLength='30'
						required
						placeholder='Имя'
						id='name'
					/>
				</label>
				<label className='register__label label'>
					Email
					<input
						type='email'
						className='register__input'
						name='email'
						minLength='2'
						maxLength='30'
						required
						placeholder='Email'
						id='email'
					/>
				</label>
				<label className='register__label label'>
					Пароль
					<input
						type='password'
						className='register__input'
						name='password'
						minLength='2'
						maxLength='20'
						required
						placeholder='Пароль'
						id='password'
					/>
				</label>
				<button
					className='register__btn type__sign'
					type='button'
				>
					Зарегистрироваться
				</button>
				<div className='register__btn type__link'
				>
					Уже зарегистрированы? 
				<Link to = '/signin' className='register__btn-link'>Войти</Link>
				</div>

			</form>

		</section>
	)

}
export default Register;