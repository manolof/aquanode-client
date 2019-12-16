import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment-timezone';

import './schedule.scss';
import { ScheduleModel } from '../../models/schedule';
import { LightsSchedule } from './lights-schedule/lights-schedule';
import { RelaySchedule } from './relay-schedule/relay-schedule';

class Schedule extends Component {

	formatDateTime(dateTime) {
		return moment.tz(dateTime, 'Europe/Zurich').format('MMM DD, HH:mm');
	}

	formatDateTimeForSorting(dateTime) {
		return moment.tz(dateTime, 'Europe/Zurich').toDate();
	}

	renderScheduleJobList(jobType) {
		const { override, jobs } = jobType;
		return override ?
			<p>In override mode</p> :
			jobs
				.sort((a, b) => this.formatDateTimeForSorting(a.job_next_run) - this.formatDateTimeForSorting(b.job_next_run))
				.map((scheduleItem, index) =>
					<p key={index}>
						<strong>
							{JSON.stringify(scheduleItem.job_state)}
						</strong>
						&nbsp;
						{this.formatDateTime(scheduleItem.job_next_run)}
					</p>,
				);
	}

	render() {
		const { schedule, setSchedule, resetSchedule } = this.props;
		const { lights, relay } = schedule;

		return (
			<div className="panel">
				<header className="panel__header">
					<h3>Schedule</h3>
				</header>

				<div className="panel__content">
					<main className="schedules">
						<LightsSchedule
							schedule={this.renderScheduleJobList(lights)}
							setSchedule={(type, value) => setSchedule(type, value)}
							resetSchedule={(type) => resetSchedule(type)}
						/>

						<RelaySchedule
							schedule={this.renderScheduleJobList(relay)}
							setSchedule={(type, value) => setSchedule(type, value)}
							resetSchedule={(type) => resetSchedule(type)}
						/>
					</main>
				</div>
			</div>
		);
	}
}

Schedule.propTypes = {
	schedule: ScheduleModel.isRequired,
	resetSchedule: PropTypes.func.isRequired,
	setSchedule: PropTypes.func.isRequired,
};

export {
	Schedule,
};
