import React, { Component } from 'react';

import './App.css';
import ScheduleContainer from '../../containers/schedule';
import StatusContainer from '../../containers/status';

class App extends Component {
	render() {
		return [
			<StatusContainer key="status"/>,
			<ScheduleContainer key="schedule"/>,
		];
	}
}

export default App;
