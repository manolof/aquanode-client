import { ScheduleActions } from '../actions/schedule';

export const initialState = {
	override: false,
	items: [],
};

const scheduleReducer = (state = initialState, action) => {
	const items = action.payload;

	switch (action.type) {
		case ScheduleActions.GET:
			return {
				...state,
				items,
				override: !items.length,
			};

		case ScheduleActions.RESET:
			return {
				...state,
				override: false,
			};

		case ScheduleActions.SET:
			return {
				...state,
				override: true,
			};

		default:
			return state;
	}
};

export {
	scheduleReducer,
};
