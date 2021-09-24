import { useDispatch, useSelector } from 'react-redux';

import * as actions from '@/app/app.actions';
import { selectValues } from '@/app/app.selectors';

export const useForm = () => {
	const values = useSelector(selectValues);
	const dispatch = useDispatch();

	const cleanForm = () => {
		dispatch(actions.cleanForm());
	};

	const setInputValue = (event) =>
		dispatch(actions.setInputValue(event.target.name, event.target.value));

	const setCheckBoxValue = (event) =>
		dispatch(actions.setCheckBoxValue(event.target.name, event.target.checked));

	const setFileValue = (event) => dispatch(actions.setFileValue(event));

	return {
		values,
		cleanForm,
		setInputValue,
		setCheckBoxValue,
		setFileValue,
	};
};
