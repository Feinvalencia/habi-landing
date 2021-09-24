import { useForm } from '@/global/hooks/form';
import React from 'react';

const ImageStep = () => {
	const { values, setFileValue } = useForm();
	return (
		<fieldset>
			<legend>Imagen del apartamento</legend>
			<div>
				<label htmlFor='image'> Imagen </label>
				<input
					type='file'
					id='image'
					name='image'
					accept='image/png, image/gif, image/jpeg'
					onChange={setFileValue}
				/>
			</div>
			<fieldset>
				<legend> Vista previa </legend>
				{values.image ? (
					<img src={values.image.blob} alt="imagen" style={{ width: '30%', height: 'auto' }} />
				) : (
					<p> Aquí se mostrará una vista previa de la imagen</p>
				)}
			</fieldset>
		</fieldset>
	);
};

export default ImageStep;
