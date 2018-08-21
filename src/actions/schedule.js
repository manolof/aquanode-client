import { fetchSchedule, resetSchedule, setSchedule } from '../services/schedule';

export const ScheduleActions = Object.freeze({
	GET_START: '[Schedule] GET Start',
	GET_SUCCESS: '[Schedule] GET Success',
	GET_FAIL: '[Schedule] GET Fail',
	RESET_START: '[Schedule] RESET Start',
	RESET_SUCCESS: '[Schedule] RESET Success',
	RESET_FAIL: '[Schedule] RESET Fail',
	SET_START: '[Schedule] SET Start',
	SET_SUCCESS: '[Schedule] SET Success',
	SET_FAIL: '[Schedule] SET Fail',
});

export const getScheduleStartAction = () => ({
	type: ScheduleActions.GET_START,
});

export const getScheduleSuccessAction = (payload) => ({
	type: ScheduleActions.GET_SUCCESS,
	payload,
});

export const getScheduleFailAction = (error) => ({
	type: ScheduleActions.GET_FAIL,
	error,
});

export const getScheduleAction = () => (dispatch) => {
	dispatch(getScheduleStartAction());

	return fetchSchedule()
		.then((data) => dispatch(getScheduleSuccessAction(data)))
		.catch((err) => dispatch(getScheduleFailAction(err)));

};

export const resetScheduleStartAction = () => ({
	type: ScheduleActions.RESET_START,
});

export const resetScheduleSuccessAction = (payload) => ({
	type: ScheduleActions.RESET_SUCCESS,
	payload,
});

export const resetScheduleFailAction = (error) => ({
	type: ScheduleActions.RESET_FAIL,
	error,
});

export const resetScheduleAction = () => (dispatch) => {
	dispatch(resetScheduleStartAction());

	return resetSchedule()
		.then((data) => dispatch(resetScheduleSuccessAction(data)))
		.catch((err) => dispatch(resetScheduleFailAction(err)));

};

export const setScheduleStartAction = () => ({
	type: ScheduleActions.SET_START,
});

export const setScheduleSuccessAction = (payload) => ({
	type: ScheduleActions.SET_SUCCESS,
	payload,
});

export const setScheduleFailAction = (error) => ({
	type: ScheduleActions.SET_FAIL,
	error,
});

export const setScheduleAction = (value) => (dispatch) => {
	dispatch(setScheduleStartAction());

	return setSchedule(value)
		.then((data) => dispatch(setScheduleSuccessAction(data)))
		.catch((err) => dispatch(setScheduleFailAction(err)));

};
