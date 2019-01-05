import React, { PureComponent } from 'react';

class Header extends PureComponent {
	render() {
		return (
			<div className="container">
				<h1>
					Aquanode
					<span role="img" aria-label="Fish">🐟</span>
					<span role="img" aria-label="Plant">🌿</span>
				</h1>
			</div>
		);
	}
}

export {
	Header,
};
