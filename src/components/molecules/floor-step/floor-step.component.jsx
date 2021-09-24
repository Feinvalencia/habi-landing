import React from 'react';

import { useForm } from '@/global/hooks/form';

const FloorStep = () => {
	const { values, setInputValue } = useForm();

	return (


			<div className="form__group field">
			<input 
				type="number" 
				className="form__field" 
				value={values['floor-number']} 
				onChange={setInputValue}
				placeholder="Piso del apartamento" 
				name='floor-number'
				max='50'
				min='1'
				id='floor-number' 
				required 
			/>
			<label for="floor-number" className="form__label">Piso del apartamento</label>
		</div>
		
	);
};

export default FloorStep;
