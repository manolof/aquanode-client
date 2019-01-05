import { RecentTemperaturesActions } from '../actions/recent-temperatures';

export const initialState = {
	readings: [],
};

const recentTemperaturesReducer = (state = initialState, action) => {
	switch (action.type) {
		case RecentTemperaturesActions.GET:
			return {
				readings: action.payload,
			};

		default:
			return state;
	}
};

export {
	recentTemperaturesReducer,
};
