import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment-timezone';

import './schedule.scss';
import { ScheduleModel } from '../../models/schedule';

class Schedule extends Component {

	constructor(props) {
		super(props);
		this.state = {
			red: '',
			green: '',
			blue: '',
		};
	}

	resetSchedule(type) {
		this.props.resetSchedule(type);
	}

	setSchedule(type) {
		this.props.setSchedule(type, this.state);
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
							{JSON.stringify(scheduleItem.job_state)}
						</strong>
						&nbsp;
						{this.formatDateTime(scheduleItem.job_next_run)}
					</p>,
				);
	}

	handleChange = (e) => {
		e.persist();
		const value = e.target.value;
		this.setState(state => ({
			...state,
			[e.target.name]: value,
		}));
	};

	render() {
		const { schedule } = this.props;
		const { red, green, blue } = this.state;
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
								<form>
									<label>
										R
										<input
											type="text"
											name="red"
											value={red}
											onChange={this.handleChange}
										/>
									</label>
									<label>
										G
										<input
											type="text"
											name="green"
											value={green}
											onChange={this.handleChange}
										/>
									</label>
									<label>
										B
										<input
											type="text"
											name="blue"
											value={blue}
											onChange={this.handleChange}
										/>
									</label>
									<button className="schedule__set" onClick={() => this.setSchedule('lights')}>SET</button>
								</form>
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
