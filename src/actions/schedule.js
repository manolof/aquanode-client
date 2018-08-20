import { fetchSchedule } from '../services/schedule';

export const ScheduleActions = Object.freeze({
	GET_START: '[Schedule] GET Start',
	GET_SUCCESS: '[Schedule] GET Success',
	GET_FAIL: '[Schedule] GET Fail',
});

export const createGetScheduleStartAction = () => ({
	type: ScheduleActions.GET_START,
});

export const createGetScheduleSuccessAction = (payload) => ({
	type: ScheduleActions.GET_SUCCESS,
	payload,
});

export const createGetScheduleFailAction = (error) => ({
	type: ScheduleActions.GET_FAIL,
	error,
});

export const createGetScheduleAction = () => (dispatch) => {
	dispatch(createGetScheduleStartAction());

	return fetchSchedule()
		.then((data) => dispatch(createGetScheduleSuccessAction(data)))
		.catch((err) => dispatch(createGetScheduleFailAction(err)));

};
