import { connect } from 'socket.io-client';

const socket = connect('/status');

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
