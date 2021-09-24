import React from 'react';

import { useForm } from '@/global/hooks/form';

const InformationStep = () => {
	const { values, setInputValue } = useForm();

	return (
		<div className="form__group field">
			<input 
				type="text" 
				className="form__field" 
				value={values.name} 
				onChange={setInputValue}
				placeholder="Nombre y Apellidos" 
				name="name" 
				id='name' 
				required 
			/>
			<label for="name" className="form__label">Nombre y Apellidos</label>
		</div>

	);
};

export default InformationStep;
