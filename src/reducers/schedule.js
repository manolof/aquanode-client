import { ScheduleActions } from '../actions/schedule';

export const initialState = {
	override: false,
	items: [],
};

const scheduleReducer = (state = initialState, action) => {
	const items = action.payload;

	switch (action.type) {
		case ScheduleActions.GET_SUCCESS:
		case ScheduleActions.RESET_SUCCESS:
			return {
				...initialState,
				items,
			};

		case ScheduleActions.SET_SUCCESS:
			return {
				...initialState,
				override: true,
			};

		default:
			return state;
	}
};

export default scheduleReducer;
