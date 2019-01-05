import React, { Component } from 'react';
import moment from 'moment-timezone';
import { Line } from 'react-chartjs-2';

import './recent-temperatures.scss';
import { RecentTemperaturesModel } from '../../models/recent-temperatures';

function factorData(data) {
	return data.map((e, i, a) => {
		const prev = a[i - 1];
		const next = a[i + 1];
		if (e === prev && e === next) {
			return '' + e;
		}
		return e;
	}).map(e => typeof e === 'string' ? null : e);
}

class RecentTemperatures extends Component {
	formatDateTime(dateTime) {
		return moment.tz(dateTime, 'Europe/Zurich').format('MMM DD, HH:mm');
	}

	render() {
		const { recentTemperatures } = this.props;
		const { readings } = recentTemperatures;

		const labels = readings.reverse().map((sample) => this.formatDateTime(sample.date));
		const datasetData = readings.reverse().map((dataset) => dataset.temperature);

		const datasets = [
			{
				label: 'Temperature (°C)',
				data: factorData(datasetData),
				fill: false,
				lineTension: 0.1,
				borderColor: 'rgb(255, 99, 132)',
				spanGaps: true,
			},
		];
		const data = {
			labels,
			datasets,
		};

		const options = {
			responsive: true,
			legend: {
				display: false,
			},
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			hover: {
				mode: 'nearest',
				intersect: true,
			},
			scales: {
				xAxes: [{
					display: true,
					scaleLabel: {
						display: false,
					},
				}],
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Temperature (°C)',
					},
					ticks: {
						suggestedMin: 24,
						stepSize: .5,
					},
				}],
			},
		};

		return (
			<div className="panel">
				<header className="panel__header">
					<h3>Recent Temperatures</h3>
				</header>

				<main className="panel__content">
					<section className="temperatures-graph-wrapper">
						<Line
							data={data}
							height={100}
							options={options}
						/>
					</section>
				</main>
			</div>
		);
	}
}

RecentTemperatures.propTypes = {
	recentTemperatures: RecentTemperaturesModel.isRequired,
};

export {
	RecentTemperatures,
};
