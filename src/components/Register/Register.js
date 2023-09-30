import './Register.css'
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';

function Register() {
	return (
		<main className="register">
			<section className='form'>
			<Link to='/' className="form__logo-link">
				<img className="form__logo" src={Logo} alt='Лого' />
			</Link>
			<h1 className="form__title">Добро пожаловать!</h1>
			<form className='form__auth'>
				<label className='form-field label'>
					Имя
					<input
						type='text'
						className='form-field__input'
						name='name'
						minLength='2'
						maxLength='30'
						required
						placeholder='Имя'
						id='name'
					/>
				</label>
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
					Зарегистрироваться
				</button>
				</form>
				<div className='form__advice type__link'
				>
					Уже зарегистрированы? 
				<Link to = '/signin' className='form__advice-link'>Войти</Link>
				</div>
			</section>



		</main>
	)

}
export default Register;