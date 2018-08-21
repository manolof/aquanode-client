import React, { Component } from 'react';

import './app.css';
import ScheduleContainer from '../../containers/schedule/schedule';
import StatusContainer from '../../containers/status/status';

class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<header>
					<StatusContainer key="status"/>
				</header>

				<div className="content">
					<ScheduleContainer key="schedule"/>
				</div>
			</div>
		);
	}
}

export default App;
