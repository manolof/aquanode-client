import PropTypes from 'prop-types';

export const StatusModel = PropTypes.shape({
	time: PropTypes.string,
	entities: PropTypes.shape({
		lights: PropTypes.string,
		relay: PropTypes.string,
		temperatureSensor: PropTypes.string,
	}),
});
