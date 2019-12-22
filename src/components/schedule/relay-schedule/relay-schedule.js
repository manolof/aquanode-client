import PropTypes from 'prop-types';
import React, { Component } from 'react';

class RelaySchedule extends Component {
	type = 'relay';

	render() {
		const { schedule, resetSchedule, setSchedule } = this.props;

		return (
			<section className="schedule schedule__relay">
				<h4>Relay</h4>

				<article className="schedule__values">
					{schedule}
				</article>

				<footer className="schedule__footer">
					<button className="schedule__reset" onClick={() => resetSchedule(this.type)}>RESET</button>
					<button className="schedule__set" onClick={() => setSchedule(this.type, 'on')}>SET ON</button>
					<button className="schedule__set" onClick={() => setSchedule(this.type, 'off')}>SET OFF</button>
				</footer>
			</section>
		);
	}
}

RelaySchedule.propTypes = {
	schedule: PropTypes.node.isRequired,
	resetSchedule: PropTypes.func.isRequired,
	setSchedule: PropTypes.func.isRequired,
};

export {
	RelaySchedule,
};
