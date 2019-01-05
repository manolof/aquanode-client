import React, { Component } from 'react';

import './app.scss';
import { RecentTemperaturesContainerConnect } from '../../containers/recentTemperatures/recent-temperatures';
import { ScheduleContainerConnect } from '../../containers/schedule/schedule';
import { StatusContainerConnect } from '../../containers/status/status';
import { Header } from '../header/header';

class App extends Component {
	render() {
		return (
			<div className="app">
				<header className="app-header">
					<Header/>
				</header>

				<div className="app-content container">
					<StatusContainerConnect key="status"/>
					<RecentTemperaturesContainerConnect key="recentTemperatures"/>
					<ScheduleContainerConnect key="schedule"/>
				</div>
			</div>
		);
	}
}

export {
	App,
};
