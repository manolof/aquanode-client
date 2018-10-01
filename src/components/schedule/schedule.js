import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment';

import './schedule.css';
import { ScheduleModel } from '../../models/schedule';

class Schedule extends Component {
	constructor(props) {
		super(props);

		this.state = {
			overrideMode: false,
		};
	}

	componentWillReceiveProps(nextProps) {
		const schedule = nextProps.schedule;

		if (schedule && !schedule.length) {
			this.setState({
				overrideMode: true,
			});
		}
	}

	resetSchedule() {
		this.props.resetSchedule();
		this.setState({
			overrideMode: false,
		});
	}

	setSchedule(value) {
		this.props.setSchedule(value);
		this.setState({
			overrideMode: true,
		});
	}

	render() {
		const { schedule } = this.props;
		const { overrideMode } = this.state;

		return (
			<div className="panel">
				<header className="panel__header">Schedule</header>

				<div className="panel__content">
					{
						overrideMode ? <p>In override mode</p> :
							schedule
								.sort((a, b) => a.job_next_run > b.job_next_run)
								.map((scheduleItem, index) =>
									<p key={index}>
										<strong>"{scheduleItem.job_name}"</strong> {moment(scheduleItem.job_next_run).format('MMM DD, HH:mm')}
									</p>,
								)
					}
				</div>

				<footer className="panel__footer">
					<button className="reset" onClick={() => this.resetSchedule()}>RESET</button>
					<button className="set-day" onClick={() => this.setSchedule('day')}>SET DAY</button>
					<button className="set-night" onClick={() => this.setSchedule('night')}>SET NIGHT</button>
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
