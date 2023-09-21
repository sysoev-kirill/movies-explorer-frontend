import { useState } from 'react';
import './FilterCheckbox.css';



function FilterCheckbox({ onCheckbox }) {
	const [checked, setChecked] = useState(false);
	function handleChange() {
		setChecked(!checked); 
	}
	

	return (
		<div className='filter__checkbox'>
			<label className="filter__checkbox-box">
				<input
					className="radio-checkbox"
					type="radio"
					name="shortFilms"
					checked={checked}
					id="checkbox"
					onChange={handleChange}
				
				/>
				<span className="filter__checkbox-title">Короткометражки</span>
			</label>
		</div>
	)
}
export default FilterCheckbox;