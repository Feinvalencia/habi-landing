import React from 'react';

import { useForm } from '@/global/hooks/form';

const EmailStep = () => {
	const { setInputValue, values } = useForm();

	return (
		<div className="form__group field">
				<input 
					type="text" 
					className="form__field" 
					value={values.email} 
					onChange={setInputValue}
					placeholder="Correo Electrónico" 
					name="email" 
					id='email' 
					required 
				/>
				<label for="email" className="form__label">Correo Electrónico</label>
		</div>
	);
};

export default EmailStep;
