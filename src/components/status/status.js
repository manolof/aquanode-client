import React, { Component } from 'react';
import moment from 'moment-timezone';

import './status.css';
import { StatusModel } from '../../models/status';

class Status extends Component {
	formatDateTime(dateTime) {
		return moment.tz(dateTime, 'Europe/Zurich').format('MMM DD, HH:mm:ss');
	}

	render() {
		const { status } = this.props;

		return (
			<div className="container">
				<div className="server-time">
					<strong>Server time:&nbsp;</strong>
						{this.formatDateTime(status.time)}
				</div>

				<div className="statuses">
					{
						status.entities.map((entity, index) =>
							entity.status &&
							<span key={index}>
								{entity.type}: <strong>{entity.status}</strong>&nbsp;
							</span>,
						)
					}
				</div>
			</div>
		);
	}
}

Status.propTypes = {
	status: StatusModel.isRequired,
};

export default Status;
