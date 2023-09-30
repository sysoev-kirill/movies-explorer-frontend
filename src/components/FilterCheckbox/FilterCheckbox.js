import { useEffect, useState } from 'react';
import './FilterCheckbox.css';
import { useLocation } from 'react-router-dom';

function FilterCheckbox(onFilter, disableCheckbox) {
	const [checked, setChecked] = useState(false);

	function handleChangeCheckbox() {
		const newValue = !checked;
		setChecked(!newValue); 
		onFilter(newValue);
	}

	const location = useLocation();

	// useEffect(() => {
	// 	if (location.pathname === '/movies' && checked !== null) {
	// 	setChecked(checked);
	// 	}
	// }, [location.pathname, checked]);
  
	return (
		<div className='filter__checkbox'>
			<label className="filter__checkbox-box">
				<input
					className="radio-checkbox"
					type="radio"
					name="shortFilms"
					disabled={disableCheckbox}
					checked={checked}
					id="checkbox"
					onChange={handleChangeCheckbox}
				
				/>
				<span className="filter__checkbox-title">Короткометражки</span>
			</label>
		</div>
	)
}
export default FilterCheckbox;