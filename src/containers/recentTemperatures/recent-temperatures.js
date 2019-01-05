import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRecentTemperaturesAction } from '../../actions/recent-temperatures';
import { RecentTemperatures } from '../../components/recent-temperatures/recent-temperatures';
import { RecentTemperaturesModel } from '../../models/recent-temperatures';

class RecentTemperaturesContainer extends Component {
	componentDidMount() {
		const { getRecentTemperatures } = this.props;
		getRecentTemperatures();
	}

	render() {
		const { recentTemperatures } = this.props;

		return (
			<RecentTemperatures recentTemperatures={recentTemperatures}/>
		);
	}
}

RecentTemperaturesContainer.propTypes = {
	recentTemperatures: RecentTemperaturesModel.isRequired,
	getRecentTemperatures: PropTypes.func.isRequired,
};

// istanbul ignore next
const mapStateToProps = (state) => ({
	recentTemperatures: state.recentTemperatures,
});

// istanbul ignore next
const mapDispatchToProps = (dispatch) => ({
	getRecentTemperatures: () => dispatch(getRecentTemperaturesAction()),
});

const RecentTemperaturesContainerConnect = connect(mapStateToProps, mapDispatchToProps)(RecentTemperaturesContainer);

export {
	RecentTemperaturesContainer,
	RecentTemperaturesContainerConnect,
};
