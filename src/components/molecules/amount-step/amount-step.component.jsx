import React from 'react';

import { useForm } from '@/global/hooks/form';

const AmountStep = () => {
	const { setInputValue, values } = useForm();

	return (

		<div className="form__group field">
			<input 
				type='number'
				className="form__field"
				step='any'
				min='0'
				value={values.amount} 
				onChange={setInputValue}
				placeholder="Precio del apartamento" 
				name='amount'
				id='amount' 
				required 
			/>
			<label for="amount" className="form__label">Precio del apartamento</label>
		</div>

	);
};

export default AmountStep;
