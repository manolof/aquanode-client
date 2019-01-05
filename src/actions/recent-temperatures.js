import { connect } from 'socket.io-client';

const socket = connect(process.env.REACT_APP_ENDPOINT_RECENT_TEMPERATURES);

export const RecentTemperaturesActions = Object.freeze({
	GET: '[RecentTemperatures] GET',
});

export const getRecentTemperaturesAction = () => (dispatch) => {
	socket.on('get', (message) => {
		dispatch({
			type: RecentTemperaturesActions.GET,
			payload: message.data,
		});
	});
};
