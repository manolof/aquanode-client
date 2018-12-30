import { connect } from 'socket.io-client';

const socket = connect(process.env.REACT_APP_ENDPOINT_STATUS);

export const StatusActions = Object.freeze({
	GET: '[Status] GET',
});

export const getStatusAction = () => (dispatch) => {
	socket.on('get', (message) => {
		dispatch({
			type: StatusActions.GET,
			payload: message.data,
		});
	});
};
