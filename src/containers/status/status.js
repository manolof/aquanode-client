import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getStatusAction } from '../../actions/status';
import { Status } from '../../components/status/status';
import { StatusModel } from '../../models/status';

class StatusContainer extends Component {
	componentDidMount() {
		const { getStatus } = this.props;
		getStatus();
	}

	render() {
		const { status } = this.props;

		return (
			<Status status={status}/>
		);
	}
}

StatusContainer.propTypes = {
	status: StatusModel.isRequired,
	getStatus: PropTypes.func.isRequired,
};

// istanbul ignore next
const mapStateToProps = (state) => ({
	status: state.status,
});

// istanbul ignore next
const mapDispatchToProps = (dispatch) => ({
	getStatus: () => dispatch(getStatusAction()),
});

const StatusContainerConnect = connect(mapStateToProps, mapDispatchToProps)(StatusContainer);

export {
	StatusContainer,
	StatusContainerConnect,
};
