import { StatusActions } from '../actions/status';

export const initialState = {
	time: '',
	entities: [],
};

const statusReducer = (state = initialState, action) => {
	switch (action.type) {
		case StatusActions.GET:
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
};

export {
	statusReducer,
};
