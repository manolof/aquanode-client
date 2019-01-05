import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment-timezone';

import './schedule.scss';
import { ScheduleModel } from '../../models/schedule';

class Schedule extends Component {
	resetSchedule(type) {
		this.props.resetSchedule(type);
	}

	setSchedule(type, value) {
		this.props.setSchedule(type, value);
	}

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
							&quot;{scheduleItem.job_name}&quot;
						</strong>
						&nbsp;
						{this.formatDateTime(scheduleItem.job_next_run)}
					</p>,
				);
	}

	render() {
		const { schedule } = this.props;
		const { lights, relay } = schedule;

		return (
			<div className="panel">
				<header className="panel__header">
					<h3>Schedule</h3>
				</header>

				<div className="panel__content">
					<main className="schedules">
						<section className="schedule">
							<header>
								<h4>Lights</h4>
							</header>

							<article>
								{this.renderScheduleJobList(lights)}
							</article>

							<footer className="schedule__footer">
								<button className="schedule__reset" onClick={() => this.resetSchedule('lights')}>RESET</button>
								<button className="schedule__set-day" onClick={() => this.setSchedule('lights', 'day')}>SET DAY</button>
								<button className="schedule__set-night" onClick={() => this.setSchedule('lights', 'night')}>SET NIGHT</button>
							</footer>
						</section>

						<section className="schedule">
							<header>
								<h4>Relay</h4>
							</header>

							<article>
								{this.renderScheduleJobList(relay)}
							</article>

							<footer className="schedule__footer">
								<button onClick={() => this.resetSchedule('relay')}>RESET</button>
								<button onClick={() => this.setSchedule('relay', 'on')}>SET ON</button>
								<button onClick={() => this.setSchedule('relay', 'off')}>SET OFF</button>
							</footer>
						</section>
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
