import { fetchStatus } from '../services/status';

export const StatusActions = Object.freeze({
	GET_START: '[Status] GET Start',
	GET_SUCCESS: '[Status] GET Success',
	GET_FAIL: '[Status] GET Fail',
});

export const getStatusStartAction = () => ({
	type: StatusActions.GET_START,
});

export const getStatusSuccessAction = (payload) => ({
	type: StatusActions.GET_SUCCESS,
	payload,
});

export const getStatusFailAction = (error) => ({
	type: StatusActions.GET_FAIL,
	error,
});

export const getStatusAction = () => (dispatch) => {
	dispatch(getStatusStartAction());

	return fetchStatus()
		.then((data) => dispatch(getStatusSuccessAction(data)))
		.catch((err) => dispatch(getStatusFailAction(err)));

};
