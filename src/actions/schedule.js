import { connect } from 'socket.io-client';

const socket = connect(process.env.REACT_APP_ENDPOINT_SCHEDULE);

export const ScheduleActions = Object.freeze({
	GET: '[Schedule] GET',
});

export const getScheduleAction = () => (dispatch) => {
	socket.on('get', (message) => {
		dispatch({
			type: ScheduleActions.GET,
			payload: message.data,
		});
	});
};

export const resetScheduleAction = (type) => {
	socket.emit('reset', { type });
};

export const setScheduleAction = (type, value) => {
	socket.emit('set', { type, value });
};
