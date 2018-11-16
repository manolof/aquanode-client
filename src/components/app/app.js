import React, { Component } from 'react';
import { connect } from 'socket.io-client';

import './app.scss';
import { ScheduleContainerConnect } from '../../containers/schedule/schedule';
import { StatusContainerConnect } from '../../containers/status/status';

class App extends Component {
	render() {
		const socket = connect('/');
		socket.on('status', (message) => {
			console.log('status', JSON.stringify(message));
		});

		socket.on('schedule', (message) => {
			console.log('schedule', JSON.stringify(message));
		});

		return (
			<div className="app">
				<header className="app-header">
					<StatusContainerConnect key="status"/>
				</header>

				<div className="app-content container">
					<ScheduleContainerConnect key="schedule"/>
				</div>
			</div>
		);
	}
}

export {
	App,
};
