export const ActionTypes = {
	LANDING_FORM_INPUT_VALUE: 'LANDING_FORM_INPUT_VALUE',
	LANDING_FORM_CHECK_BOX_VALUE: 'LANDING_FORM_CHECK_BOX_VALUE',
	LANDING_FORM_FILE_VALUE: 'LANDING_FORM_FILE_VALUE',
	SET_LANDING_FORM_STEP: 'SET_LANDING_FORM_STEP',
	CLEAN_FORM: 'CLEAN_FORM',
};

export const setStep = (step) => (dispatch) => {
	dispatch({
		type: ActionTypes.SET_LANDING_FORM_STEP,
		payload: { step },
	});
};

export const setInputValue = (name, value) => (dispatch) => {
	dispatch({
		type: ActionTypes.LANDING_FORM_INPUT_VALUE,
		payload: { name, value },
	});
};

export const setCheckBoxValue = (name, checked) => (dispatch) => {
	dispatch({
		type: ActionTypes.LANDING_FORM_CHECK_BOX_VALUE,
		payload: { name, checked },
	});
};

export const cleanForm = (event) => (dispatch) => {
	dispatch({
		type: ActionTypes.CLEAN_FORM,
	});
};

export const setFileValue = (event) => (dispatch) => {
	const file = event.target.files[0];

	dispatch({
		type: ActionTypes.LANDING_FORM_FILE_VALUE,
		payload: {
			name: event.target.name,
			blob: URL.createObjectURL(file),
			filename: file.name,
		},
	});
};
