import PropTypes from 'prop-types';

const Schedule = {
	override: PropTypes.bool,
	jobs: PropTypes.arrayOf(
		PropTypes.shape({
			job_state: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
			job_next_run: PropTypes.string,
		}),
	),
};

export const ScheduleModel = PropTypes.shape({
	lights: PropTypes.shape(Schedule),
	relay: PropTypes.shape(Schedule),
});
