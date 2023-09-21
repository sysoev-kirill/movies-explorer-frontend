import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {

	return (
		<div className='search'>
			<form className="search__form">
				<input
					className="search__input"
					type="text"
					placeholder="Фильм"
					required
					minLength={2}
					maxLength={20}
				></input>

				<button
					className="search__button"
					type="submit"
				>
					Найти
				</button>
				
			
			</form>
			<FilterCheckbox
				/>


		</div>
	)

}

export default SearchForm;
