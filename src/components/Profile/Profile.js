import { useContext, useEffect, useState } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Profile({ onSignOut, onUpdateInfoUser }) {
	const currentUser = useContext(CurrentUserContext);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [disable, setDisable] = useState(true);
	const [isChanged, setIsChanged] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [errorName, setErrorName] = useState('');
	const [errorEmail, setErrorEmail] = useState('');

	function handleChangeName(evt) {
		const input = evt.target;
		setName(input.value)
		setErrorName(input.validationMessage);
		}
	

	function handleChangeEmail(evt) {
		const input = evt.target;
		setEmail(input.value);
		setErrorEmail(input.validationMessage);
	}


	useEffect(() => {
		setName(currentUser.name);
		setEmail(currentUser.email);
	}, [currentUser]);


	useEffect(() => {
		setIsChanged((currentUser.name !== name) || (currentUser.email !== email));
	}, [name, email, currentUser]);


	function handleSubmit(e) {
		e.preventDefault();
		onUpdateInfoUser({
			name: name,
			email: email,
		});

	};


	function handleEditeClick() {
		setIsActive(true);
	};



	// useEffect(() => {
	// 	if (currentUser) {
	// 	  setValue({
	// 		 name: currentUser.name,
	// 		 email: currentUser.email,
	// 	  });
	// 	}
	//  }, [setValues, currentUser]); 

	//  useEffect(() => {
	// 	if (currentUser.name === values.name && currentUser.email === values.email) {
	// 	  setIsValid(false);
	// 	}
	//  }, [setIsValid, values, currentUser]);

	//  useEffect(() => {
	// 	if (infoMessage && infoMessage.code === 200) {
	// 	  setIsInputActive(false);
	// 	}
	//  }, [setIsInputActive, infoMessage, infoMessage.code]);



	// const [formValue, setFormValue] = useState({
	// 	name: currentUser.name,
	// 	email: currentUser.email,
	// })

	// const [formValues, setFormValues] = useState({
	// 	name: {
	// 		value: "",
	// 		isValid: true,
	// 		errorMessage: ""
	// 	},
	// 	email: {
	// 		value: "",
	// 		isValid: true,
	// 		errorMessage: ""
	// 	}
	// });

	// const isValid = formValues.name.isValid && formValues.email.isValid;

	// useEffect(() => {
	// 	isValid === true ? setIsDisable(false) : setIsDisable(true);
	// }, [isValid]);

	// useEffect(() => {
	// 	isLoading ? setIsDisable(true) : setIsDisable(false);
	// }, [isLoading]);

	// useEffect(() => {
	// 	if (
	// 		currentUser.name === formValues.name.value &&
	// 		currentUser.email === formValues.email.value
	// 	) {
	// 		setIsDisable(true);
	// 	} else if (isValid) {
	// 		setIsDisable(false);
	// 	} else if (!isValid) {
	// 		setIsDisable(true);
	// 	}
	// }, [currentUser, formValues, isValid]);

	// useEffect(() => {
	// 	setName(currentUser.name);
	// 	setEmail(currentUser.email);
	//  }, [currentUser]);

	//  useEffect(() => {
	// 	setIsChange((currentUser.name !== name) || (currentUser.email !== email));
	//  }, [name, email, currentUser]);

	// useEffect(() => {
	// 	setFormValues({
	// 		name: {
	// 			value: currentUser.name,
	// 			isValid: true,
	// 			errorMessage: ""
	// 		},
	// 		email: {
	// 			value: currentUser.email,
	// 			isValid: true,
	// 			errorMessage: ""
	// 		}
	// 	});
	// }, [currentUser]);

	// function handleChange(e) {
	// 	// деструктуризируем свойство target, получая значения инпутов и ошибки
	// 	const { name, value, validity, validationMessage } = e.target;
	// устанавливаем новое состояние, обязательно совмещая с предыдущим
	// чтобы значения других инпутов не перезаписались на undefined
	// 	setFormValues((prevState) => ({
	// 	  ...prevState,
	// 	  [name]: {
	// 		 ...formValues[name],
	// 		 value,
	// 		 isValid: validity.valid,
	// 		 errorMessage: validationMessage
	// 	  }
	// 	}));
	//  }




	// useEffect(() => {
	// 	setName(currentUser.name);
	// 	setEmail(currentUser.email);
	// }, [currentUser]);



	//  function handleSubmit(e) {
	// 	e.preventDefault();
	// 	onUpdateInfoUser({
	// 	  name: formValues.name.value,
	// 	  email: formValues.email.value
	// 	});
	//  }


	return (
		<section className='profile__section'>
			<div className='profile__container'>
				<h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
				<form className='profile__form' onSubmit={handleSubmit} noValidate={true}
				>
					<label className='profile__label'>
						Имя
						<input
							type='text'
							className='profile__input'
							name='name'
							minLength='2'
							maxLength='30'
							required
							placeholder='Имя'
							id='name'
							title='Разрешено использовать латиницу, кириллицу, пробел или дефис'
							// pattern='^[A-Za-zА-Яа-яЁё/s-]+$'
							value={name || ""}
							// disabled={!isEdit || isLoading}
							// onChange={handleChangeName}
							disabled={!isActive}
							onChange={handleChangeName}
						/>
					</label>
					<span className="form__input-error form__error-profile">
						{errorName ? `Поле должно быть заполнено и может содержать только латиницу,
                кириллицу, пробел или дефис` : ''}
					</span>
					<label className='profile__label'>
						Email
						<input
							type='email'
							className='profile__input'
							name='email'
							minLength='2'
							maxLength='30'
							required
							placeholder='Email'
							value={email || ""}
							id='email'
							disabled={!isActive}
							// onChange={handleChangeEmail}
							onChange={handleChangeEmail}
						/>
					</label>
					<span className="form__input-error form__error-profile">
						{errorEmail || ''}
					</span>
					{isActive ? (
						<button
							className='profile__btn type__save'
							type='submit'
							disabled={!isChanged}
						>
							Сохранить
						</button>
					) : (
						<>
							<button
								className='profile__btn type__edit'
								type='button'
								onClick={handleEditeClick}
							>
								Редактировать
							</button>
							<button
								className='profile__btn type__logout'
								type='button'
								onClick={onSignOut}
							>
								Выйти из аккаунта
							</button>
						</>
					)}
				</form>
			</div>
		</section >
	)


}

export default Profile;
