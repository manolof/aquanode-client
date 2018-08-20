import { StatusActions } from '../actions/status';

const initialState = {
	time: '',
	entities: [],
};

const statusReducer = (state = initialState, action) => {
	switch (action.type) {
		case StatusActions.GET_SUCCESS:
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
};

export default statusReducer;
