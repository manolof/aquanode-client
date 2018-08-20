import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createGetScheduleAction } from '../../actions/schedule';
import Schedule from '../../components/schedule';
import { ScheduleModel } from '../../models/schedule';

class ScheduleContainer extends Component {
	componentDidMount() {
		const { fetchSchedule } = this.props;
		fetchSchedule();
	}

	render() {
		const { schedule } = this.props;

		return (
			<Schedule schedule={schedule}/>
		);
	}
}

ScheduleContainer.propTypes = {
	schedule: ScheduleModel.isRequired,
	fetchSchedule: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	schedule: state.schedule,
});

const mapDispatchToProps = (dispatch) => ({
	fetchSchedule: () => dispatch(createGetScheduleAction()),
});

export { ScheduleContainer };

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);
