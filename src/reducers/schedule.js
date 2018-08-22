import { ScheduleActions } from '../actions/schedule';

const initialState = [];

const scheduleReducer = (state = initialState, action) => {
	switch (action.type) {
		case ScheduleActions.GET_SUCCESS:
		case ScheduleActions.RESET_SUCCESS:
		case ScheduleActions.SET_SUCCESS:
			return action.payload;

		default:
			return state;
	}
};

export default scheduleReducer;
