import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
	return (
		<main className='profile__section'>
			<section className='profile__container'>
				<h1 className='profile__title'>Привет, Кирилл!</h1>
				<form className='profile__form'>
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
						/>
					</label>
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
							id='email'
						/>
					</label>

					<button
						className='profile__btn type__edit'
						type='button'
					>
						Редактировать
					</button>
					<Link to='/'
						className='profile__btn type__logout'
					>
						Выйти из аккаунта
					</Link>
				
			</form>
		</section>
		</main >
	)


}
export default Profile;
