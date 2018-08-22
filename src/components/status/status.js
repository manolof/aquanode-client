import React, { Component } from 'react';
import moment from 'moment';

import './status.css';
import { StatusModel } from '../../models/status';

class Status extends Component {
	render() {
		const { status } = this.props;

		return (
			<div className="container">
				<div className="server-time">
					<strong>Server time:&nbsp;</strong>
					{moment(status.time).format('MMM DD, HH:mm:ss')}
				</div>

				<div className="statuses">
					{
						status.entities.map((entity) =>
							entity.status &&
							<span key={entity.type}>
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
