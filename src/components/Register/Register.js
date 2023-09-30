import './Register.css'
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import { useEffect, useState } from 'react';


function Register({ onRegister}) {

	// const { formValue, errors, isValid, handleChange } = ValidationForm();

	// const handleSubmit = (evt) => {
	// 	evt.preventDefault();
	// 	onRegister(formValue.name, formValue.email, formValue.password)
	//  }
  
	const [formValue, setFormValue] = useState({
		name: '',
		email: '',
		password: '',
	})

	const [isDisable, setIsDisable] = useState(false);
	
	const [isValid, setIsValid] = useState(false);
	const [errors, setErrors] = useState({});


	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormValue({
			...formValue,
			[name]: value
		});
		 setErrors({...errors, [name]: e.target.validationMessage});
	}


	function handleSubmit(e) {
		e.preventDefault();
		const { name, email, password } = formValue;
		if (!formValue.name || !formValue.email || !formValue.password) {
			return;
		}
		onRegister({ name, email, password });
	}

	// useEffect(() => {
	// 	isValid ? setIsDisable(false) : setIsDisable(true);
	// }, [isValid]);


	// function validateForm(){
	// if (formValue.name && formValue.email && formValue.password) {
	//   setIsValid(true)
	// }
	// setIsValid(false)
	// }

	useEffect(() => {
		setIsValid((formValue.name) || (formValue.email))
	}, [formValue.name, formValue.email]);

	//////////////
	// function handleSubmit(e) {
	// 	e.preventDefault();
	// 	onRegister({
	// 	  name: formValue.name,
	// 	  email: formValue.email,
	// 	  password: formValue.password
	// 	});
	//  }


	// const [formValue, setFormValue] = useState({
	// 	name: {
	// 		value: "",
	// 		isValidity: false,
	// 		errorMessage: ""
	// 	},
	// 	email: {
	// 		value: "",
	// 		isValidity: false,
	// 		errorMessage: ""
	// 	},
	// 	password: {
	// 		value: "",
	// 		isValidity: false,
	// 		errorMessage: ""
	// 	}
	// });

	// const [disabled, setDisabled] = useState(false);

	// const isValid =
	// 	formValue.name.isValidity &&
	// 	formValue.email.isValidity &&
	// 	formValue.password.isValidity;

	// function handleChange(e) {
	// 	// деструктуризируем свойство target, получая значения инпутов и ошибки
	// 	const { name, value, validity, validationMessage } = e.target;
	// 	// устанавливаем новое состояние, обязательно совмещая с предыдущим
	// 	// чтобы значения других инпутов не перезаписались на undefined
	// 	setFormValue((prevState) => ({
	// 		...prevState,
	// 		[name]: {
	// 			...formValue[name],
	// 			value,
	// 			isValidity: validity.valid,
	// 			errorMessage: validationMessage
	// 		}
	// 	}));
	// }

	// useEffect(() => {
	// 	isValid ? setDisable(false) : setDisabled(true);
	// }, [isValid]);

	// function handleSubmit(e) {
	// 	e.preventDefault();
	// 	onRegister({
	// 		name: formValue.name.value,
	// 		email: formValue.email.value,
	// 		password: formValue.password.value
	// 	});
	// }

	// useEffect(() => {
	// 	isLoading ? setDisabled(true) : setDisabled(false);
	// }, [isLoading]);

	return (
		<section className="register__section">
			<Link to='/' className="register__logo-link">
				<img className="register__logo" src={Logo} alt='Лого' />
			</Link>
			<h1 className="register__title">Добро пожаловать!</h1>
			<form className='register__form' onSubmit={handleSubmit}>
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
						value={formValue.name || ""}
						onChange={handleChange}
					/>
				</label>
				<span className="form__input-error form__error-register">{errors.name ? `Поле должно быть заполнено и может содержать только латиницу,
                кириллицу, пробел или дефис` : ''}</span>
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
						value={formValue.email || ""}
						onChange={handleChange}
					/>
				</label>
				<span className="form__input-error form__error-register"> {errors.email || ''}</span>
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
						value={formValue.password || ""}
						onChange={handleChange}
					/>
				</label>
				<span className="form__input-error form__error-register">  {errors.password || ''}</span>

				<button
					className='register__btn type__sign'
					type='submit'
					disabled={!isValid}
				>
					Зарегистрироваться
				</button>
				<div className='register__btn type__link'
				>
					Уже зарегистрированы?
					<Link to='/signin' className='register__btn-link'>Войти</Link>
				</div>

			</form>

		</section>
	)

}
export default Register;