import React, { Component } from 'react';

import { ScheduleModel } from '../../models/schedule';

class Schedule extends Component {
	render() {
		const { schedule } = this.props;

		return (
			<div className="Schedule">
				<h4>Schedule:</h4>

				{
					schedule.map((scheduleItem) =>
						<p key={scheduleItem.job_next_run}>{scheduleItem.job_name} : {scheduleItem.job_next_run}</p>,
					)
				}
			</div>
		);
	}
}

Schedule.propTypes = {
	schedule: ScheduleModel.isRequired,
};

export default Schedule;
