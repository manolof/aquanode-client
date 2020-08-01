import PropTypes from 'prop-types';
import React, { Component } from 'react';

class LightsSchedule extends Component {

	type = 'lights';

	constructor(props) {
		super(props);
		this.state = {
			red: '',
			green: '',
			blue: '',
			white: '',
		};
	}

	handleChange = (e) => {
		e.persist();
		const value = e.target.value;
		this.setState(state => ({
			...state,
			[e.target.name]: value,
		}));
	};

	render() {
		const { schedule, resetSchedule, setSchedule } = this.props;
		const { red, green, blue, white } = this.state;

		return (
			<section className="schedule schedule__lights">
				<h4>Lights</h4>

				<article className="schedule__values">
					{schedule}
				</article>

				<form className="schedule__form">
					<label>
						R
						<input
							type="number"
							name="red"
							min="0"
							max="255"
							value={red}
							onChange={this.handleChange}
						/>
					</label>
					<label>
						G
						<input
							type="number"
							name="green"
							min="0"
							max="255"
							value={green}
							onChange={this.handleChange}
						/>
					</label>
					<label>
						B
						<input
							type="number"
							name="blue"
							min="0"
							max="255"
							value={blue}
							onChange={this.handleChange}
						/>
					</label>
					<label>
						W
						<input
							type="number"
							name="white"
							min="0"
							max="255"
							value={white}
							onChange={this.handleChange}
						/>
					</label>
				</form>

				<footer className="schedule__footer">
					<button className="schedule__reset" onClick={() => resetSchedule(this.type)}>RESET</button>
					<button className="schedule__set" onClick={() => setSchedule(this.type, this.state)}>SET</button>
				</footer>
			</section>
		);
	}
}

LightsSchedule.propTypes = {
	schedule: PropTypes.node.isRequired,
	resetSchedule: PropTypes.func.isRequired,
	setSchedule: PropTypes.func.isRequired,
};

export {
	LightsSchedule,
};
