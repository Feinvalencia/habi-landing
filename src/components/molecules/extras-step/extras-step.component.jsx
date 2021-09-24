import React from 'react';

import { useForm } from '@/global/hooks/form';

const ExtrasStep = () => {
	const { values, setCheckBoxValue } = useForm();

	return (
		<fieldset
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				boxSizing: 'border-box',
			}}
		>
			<legend> Extras </legend>
			<div>
				<label htmlFor='extra-bbq'>Zona de BBQ</label>
				<input
					id='extra-bbq'
					type='checkbox'
					name='extra-bbq'
					checked={values['extra-bbq']}
					onChange={setCheckBoxValue}
				/>
			</div>
			<div>
				<label htmlFor='extra-salon'>Salón comunal</label>
				<input
					id='extra-salon'
					type='checkbox'
					name='extra-salon'
					checked={values['extra-salon']}
					onChange={setCheckBoxValue}
				/>
			</div>
			<div>
				<label htmlFor='extra-park'>Parque de juegos</label>
				<input
					id='extra-park'
					type='checkbox'
					name='extra-park'
					checked={values['extra-park']}
					onChange={setCheckBoxValue}
				/>
			</div>
		</fieldset>
	);
};

export default ExtrasStep;
