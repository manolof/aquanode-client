import React, { Component } from 'react';

import './App.css';
import ScheduleContainer from '../../containers/schedule';
import StatusContainer from '../../containers/status';

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
