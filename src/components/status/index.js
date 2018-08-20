import React, { Component } from 'react';

import { StatusModel } from '../../models/status';

class Status extends Component {
	render() {
		const { status } = this.props;

		return (
			<div className="Status">
				<h4>The date now:</h4>
				{
					<p>{status.time}</p>
				}

				<h4>Status:</h4>
				{
					status.entities.map((entity) =>
						<p key={entity.type}>{entity.type} : {entity.status}</p>,
					)
				}
			</div>
		);
	}
}

Status.propTypes = {
	status: StatusModel.isRequired,
};

export default Status;
