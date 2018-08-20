import { ScheduleActions } from '../actions/schedule';

const initialState = [];

const scheduleReducer = (state = initialState, action) => {
	switch (action.type) {
		case ScheduleActions.GET_SUCCESS:
			return [
				...state,
				...action.payload,
			];

		default:
			return state;
	}
};

export default scheduleReducer;
