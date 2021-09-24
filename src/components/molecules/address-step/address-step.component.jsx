import React from 'react';

import { useForm } from '@/global/hooks/form';

const AddressStep = () => {
	const { setInputValue, values } = useForm();

	return (
		<div className="form__group field">
			<input 
				type="text" 
				className="form__field" 
				value={values.address} 
				onChange={setInputValue}
				placeholder="Dirección" 
				name="address" 
				id='address' 
				required 
			/>
			<label for="address" className="form__label">Dirección</label>
		</div>
	);
};

export default AddressStep;
