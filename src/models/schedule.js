import PropTypes from 'prop-types';

export const ScheduleModel = PropTypes.shape({
	override: PropTypes.bool,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			job_name: PropTypes.string,
			job_next_run: PropTypes.string,
		}),
	),
});
