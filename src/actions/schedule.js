import { connect } from 'socket.io-client';

const socket = connect(process.env.REACT_APP_ENDPOINT_SCHEDULE);

export const ScheduleActions = Object.freeze({
	GET: '[Schedule] GET',
	RESET: '[Schedule] RESET',
	SET: '[Schedule] SET',
});

export const getScheduleAction = () => (dispatch) => {
	socket.on('get', (message) => {
		dispatch({
			type: ScheduleActions.GET,
			payload: message.data,
		});
	});
};

export const resetScheduleAction = () => (dispatch) => {
	socket.emit('reset');

	dispatch({
		type: ScheduleActions.RESET,
	});
};

export const setScheduleAction = (value) => (dispatch) => {
	socket.emit('set', value);

	dispatch({
		type: ScheduleActions.SET,
	});
};
