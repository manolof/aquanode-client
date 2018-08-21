import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getScheduleAction, resetScheduleAction, setScheduleAction } from '../../actions/schedule';
import Schedule from '../../components/schedule/schedule';
import { ScheduleModel } from '../../models/schedule';

class ScheduleContainer extends Component {
	componentDidMount() {
		const { getSchedule } = this.props;
		getSchedule();
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
	getSchedule: PropTypes.func.isRequired,
	setSchedule: PropTypes.func.isRequired,
	resetSchedule: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	schedule: state.schedule,
});

const mapDispatchToProps = (dispatch) => ({
	getSchedule: () => dispatch(getScheduleAction()),
	setSchedule: (value) => dispatch(setScheduleAction(value)),
	resetSchedule: () => dispatch(resetScheduleAction()),
});

export { ScheduleContainer };

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);
