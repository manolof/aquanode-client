import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getStatusAction } from '../../actions/status';
import Status from '../../components/status/status';
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

const mapStateToProps = (state) => ({
	status: state.status,
});

const mapDispatchToProps = (dispatch) => ({
	getStatus: () => dispatch(getStatusAction()),
});

export { StatusContainer };

export default connect(mapStateToProps, mapDispatchToProps)(StatusContainer);
