import { selectStep } from '@/app/app.selectors';
import { useDispatch, useSelector } from 'react-redux';

import { setStep } from '@/app/app.actions';

/**
 * Este hook retorna propiedades útiles a la hora de trabajar con los pasos,
 * lo único que necesita es la cantidad de paso que existen
 * @param {number} amount
 * @returns
 */
export const useStep = (amount) => {
	const step = useSelector(selectStep);
	const dispatch = useDispatch();

	const handleStep = (step) => dispatch(setStep(step));
	const handleNextStep = () => handleStep(step + 1);
	const handlePrevStep = () => handleStep(step - 1);

	/**
	 * Los pasos empiezan desde el índice 0, lo cual puede ser confuso para el usuario
	 * Para mostrar en pantalla el paso actual se utiliza esta propiedad
	 */
	const displayStep = step + 1;

	/**
	 * Son los pasos restantes
	 */
	const remainingSteps = amount - 1 - step;

	/**
	 * Será true si se encuentra en el último paso
	 */
	const isLastStep = step === amount - 1;

	/**
	 * Será true si se encuentra en el primer paso
	 */
	const isFirstStep = step === 0;

	return {
		step,
		displayStep,
		remainingSteps,
		handleStep,
		handlePrevStep,
		handleNextStep,
		isFirstStep,
		isLastStep,
	};
};
