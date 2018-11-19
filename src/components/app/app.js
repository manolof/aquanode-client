import React, { Component } from 'react';

import './app.scss';
import { ScheduleContainerConnect } from '../../containers/schedule/schedule';
import { StatusContainerConnect } from '../../containers/status/status';

class App extends Component {
	render() {
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
