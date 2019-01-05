import PropTypes from 'prop-types';

const recentTemperatureReading = PropTypes.shape({
	date: PropTypes.string,
	temperature: PropTypes.number,
});

export const RecentTemperaturesModel = PropTypes.shape({
	recentTemperatures: PropTypes.arrayOf(recentTemperatureReading),
});
