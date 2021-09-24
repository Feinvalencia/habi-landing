import React from 'react';

import { useForm } from '@/global/hooks/form';

const ElevatorStep = () => {
	const { values, setCheckBoxValue } = useForm();
	return (
		<fieldset>
			<legend> Elevador </legend>
			<label htmlFor='elevator'> El apartamento cuenta con elevador </label>
			<input
				id='elevator'
				name='elevator'
				type='checkbox'
				value={values.elevator}
				onChange={setCheckBoxValue}
			/>
		</fieldset>
	);
};

export default ElevatorStep;
