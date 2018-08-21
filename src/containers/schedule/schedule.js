import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createGetScheduleAction, resetScheduleAction, setScheduleAction } from '../../actions/schedule';
import Schedule from '../../components/schedule/schedule';
import { ScheduleModel } from '../../models/schedule';

class ScheduleContainer extends Component {
	componentDidMount() {
		const { fetchSchedule } = this.props;
		fetchSchedule();
	}

	render() {
		const { schedule, setSchedule, resetSchedule } = this.props;

		return (
			<Schedule schedule={schedule} resetSchedule={resetSchedule} setSchedule={setSchedule}/>
		);
	}
}

ScheduleContainer.propTypes = {
	schedule: ScheduleModel.isRequired,
	fetchSchedule: PropTypes.func.isRequired,
	setSchedule: PropTypes.func.isRequired,
	resetSchedule: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	schedule: state.schedule,
});

const mapDispatchToProps = (dispatch) => ({
	fetchSchedule: () => dispatch(createGetScheduleAction()),
	setSchedule: (value) => dispatch(setScheduleAction(value)),
	resetSchedule: () => dispatch(resetScheduleAction()),
});

export { ScheduleContainer };

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);
