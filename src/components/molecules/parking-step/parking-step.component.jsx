import React, { useEffect } from 'react';

import { useForm } from '@/global/hooks/form';

const ParkingStep = () => {
	const { values, setCheckBoxValue } = useForm();

	useEffect(() => {
		if (!values.parking) {
			setCheckBoxValue({ target: { checked: false, name: 'parking-shade' } });
		}
	}, [values]);

	return (
		<fieldset style={{ display: 'flex', flexDirection: 'column' }}>
			<legend> Parqueadero </legend>
			<div>
				<label htmlFor='parking'>Cuenta con parqueadero</label>
				<input
					id='parking'
					type='checkbox'
					name='parking'
					checked={values['parking']}
					onChange={setCheckBoxValue}
				/>
			</div>
			<div>
				<label htmlFor='parking-shade'>El parqueadero es cubierto</label>
				<input
					id='parking-shade'
					type='checkbox'
					name='parking-shade'
					checked={values['parking-shade']}
					onChange={setCheckBoxValue}
					disabled={!values['parking']}
				/>
			</div>
		</fieldset>
	);
};

export default ParkingStep;
