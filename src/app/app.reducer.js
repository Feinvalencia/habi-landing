import { ActionTypes } from './app.actions';

const INITIAL_STATE = {
	form: {
		step: 0,
		values: {},
	},
};

function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ActionTypes.LANDING_FORM_CHECK_BOX_VALUE: {
			const { name, checked } = action.payload;

			return {
				...state,
				form: {
					...state.form,
					values: {
						...state.form.values,
						[name]: checked ? true : undefined,
					},
				},
			};
		}

		case ActionTypes.LANDING_FORM_INPUT_VALUE: {
			const { name, value } = action.payload;

			return {
				...state,
				form: {
					...state.form,
					values: {
						...state.form.values,
						[name]: value,
					},
				},
			};
		}

		case ActionTypes.CLEAN_FORM: {
			return {
				...state,
				form: {
					...state.form,
					values: {},
				},
			};
		}

		case ActionTypes.LANDING_FORM_FILE_VALUE: {
			const { name, blob, filename } = action.payload;

			return {
				...state,
				form: {
					...state.form,
					values: {
						...state.form.values,
						[name]: { blob, filename },
					},
				},
			};
		}

		case ActionTypes.SET_LANDING_FORM_STEP: {
			const { step } = action.payload;

			return {
				...state,
				form: {
					...state.form,
					step,
				},
			};
		}

		default:
			return state;
	}
}

export default reducer;
