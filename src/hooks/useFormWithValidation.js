// // import { useState } from 'react';
// // const validator = require('validator');

// function useFormWithValidation() {

// 	// 	const [formValue, setFormValue] = useState({});
// 	// 	const [errors, setErrors] = useState({});
// 	// 	const [isValid, setIsValid] = useState(false);

// 	// 	const handleChange = (evt) => {
// 	// 		const target = evt.target;
// 	// 		const { value, name } = target;

// 	// 		if (name === 'name' && target.validity.patternMismatch && value !== '') {
// 	// 			target.setCustomValidity("Name может содержать только латиницу, кириллицу, пробел или дефис.")
// 	// 		} else if (name === 'email' && !validator.isEmail(value) && value !== '') {
// 	// 			target.setCustomValidity("Необходимо указать e-mail в формате name@domain.zone")
// 	// 		} else {
// 	// 			target.setCustomValidity("")
// 	// 		}

// 	// 		setFormValue({
// 	// 			...formValue,
// 	// 			[name]: value
// 	// 		});

// 	// 		setErrors({
// 	// 			...errors,
// 	// 			[name]: target.validationMessage
// 	// 		});

// 	// 		setIsValid(target.closest("form").checkValidity());
// 	// 	};

// 	// 	const resetForm = useCallback(
// 	// 		(newValues = {}, newIsValid = false, newErrors = {}) => {
// 	// 			setFormValue(newValues);
// 	// 			setIsValid(newIsValid);
// 	// 			setErrors(newErrors);
// 	// 		},
// 	// 		[setFormValue, setErrors, setIsValid]
// 	// 	);

// 	// 	return { formValue, errors, isValid, setErrors, handleChange, resetForm, setIsValid };
// 	// }

// 	const [values, setValues] = useState({});
// 	const [errors, setErrors] = useState({});
// 	const [isValid, setIsValid] = useState(false);

// 	//---ОБРАБОТЧИКИ---
// 	function handleChange(e) {
// 		const input = e.target;
// 		const name = input.name;
// 		const value = input.value;

// 		setValues({ ...values, [name]: value });
// 		setErrors({ ...errors, [name]: input.validationMessage });
// 		setIsValid(input.closest('form').checkValidity());
// 	};

// 	return { values, errors, isValid, handleChange, setValues, setIsValid, setErrors };
// };
// export default useFormWithValidation;