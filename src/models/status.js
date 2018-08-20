import PropTypes from 'prop-types';

export const StatusModel = PropTypes.shape({
	time: PropTypes.string,
	entities: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.string,
			status: PropTypes.string,
		}),
	),
});
