import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment';

import './schedule.css';
import { ScheduleModel } from '../../models/schedule';

class Schedule extends Component {
	resetSchedule() {
		this.props.resetSchedule();
	}

	setSchedule(v) {
		this.props.setSchedule(v);
	}

	render() {
		const { schedule } = this.props;

		return (
			<div className="panel">
				<header className="panel__header">Schedule</header>

				<div className="panel__content">
					{
						schedule.map((scheduleItem) =>
							<p key={scheduleItem.job_next_run}>
								<strong>"{scheduleItem.job_name}"</strong> {moment(scheduleItem.job_next_run).format('MMM DD, HH:mm')}
							</p>,
						)
					}
				</div>

				<footer className="panel__footer">
					<button onClick={() => this.resetSchedule()}>RESET</button>
					<button className="day" onClick={() => this.setSchedule('day')}>SET DAY</button>
					<button className="night" onClick={() => this.setSchedule('night')}>SET NIGHT</button>
				</footer>
			</div>
		);
	}
}

Schedule.propTypes = {
	schedule: ScheduleModel.isRequired,
	resetSchedule: PropTypes.func.isRequired,
	setSchedule: PropTypes.func.isRequired,
};

export default Schedule;
