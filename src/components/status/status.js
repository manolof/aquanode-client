import React, { Component } from 'react';
import moment from 'moment-timezone';

import './status.scss';
import { StatusModel } from '../../models/status';

class Status extends Component {
	formatDateTime(dateTime) {
		return moment.tz(dateTime, 'Europe/Zurich').format('MMM DD, HH:mm:ss');
	}

	renderStatus(title, value) {
		return (
			<>
				<strong>{title}:&nbsp;</strong>
				{value || 'Loading'}
			</>
		);
	}

	render() {
		const { status } = this.props;
		const { entities } = status;
		const { lights, relay, temperatureSensor } = entities;

		return (
			<div className="panel">
				<header className="panel__header">
					<h3>Current Status</h3>
				</header>

				<div className="panel__content">
					<header>
						{this.renderStatus('Server time', status.time && this.formatDateTime(status.time))}
					</header>

					<main className="statuses">
						<section className="status">
							{this.renderStatus('Lights', lights)}
						</section>

						<section className="status">
							{this.renderStatus('Relay', relay)}
						</section>

						<section className="status">
							{this.renderStatus('Temperature', temperatureSensor)}
						</section>
					</main>
				</div>
			</div>
		);
	}
}

Status.propTypes = {
	status: StatusModel.isRequired,
};

export {
	Status,
};
