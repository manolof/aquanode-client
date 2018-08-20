import { fetchStatus } from '../services/status';

export const StatusActions = Object.freeze({
	GET_START: '[Status] GET Start',
	GET_SUCCESS: '[Status] GET Success',
	GET_FAIL: '[Status] GET Fail',
});

export const createGetStatusStartAction = () => ({
	type: StatusActions.GET_START,
});

export const createGetStatusSuccessAction = (payload) => ({
	type: StatusActions.GET_SUCCESS,
	payload,
});

export const createGetStatusFailAction = (error) => ({
	type: StatusActions.GET_FAIL,
	error,
});

export const createGetStatusAction = () => (dispatch) => {
	dispatch(createGetStatusStartAction());

	return fetchStatus()
		.then((data) => dispatch(createGetStatusSuccessAction(data)))
		.catch((err) => dispatch(createGetStatusFailAction(err)));

};
