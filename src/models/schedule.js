import PropTypes from 'prop-types';

export const ScheduleModel = PropTypes.arrayOf(
	PropTypes.shape({
		job_name: PropTypes.string,
		job_next_run: PropTypes.string,
	}),
);
