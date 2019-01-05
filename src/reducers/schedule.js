import { ScheduleActions } from '../actions/schedule';

export const initialState = {
	lights: {
		override: false,
		jobs: [],
	},
	relay: {
		override: false,
		jobs: [],
	},
};

const scheduleReducer = (state = initialState, action) => {
	const { payload = {}, type } = action;
	const { lights = [], relay = [] } = payload;

	switch (type) {
		case ScheduleActions.GET:
			return {
				lights: {
					override: !lights.length,
					jobs: lights,
				},
				relay: {
					override: !relay.length,
					jobs: relay,
				},
			};

		default:
			return state;
	}
};

export {
	scheduleReducer,
};
