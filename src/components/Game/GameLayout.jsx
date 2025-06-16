import PropTypes from 'prop-types';
import { Component } from 'react';

export class GameLayout extends Component {
	render() {
		return <div className="game-layout">{this.props.children}</div>;
	}
}

GameLayout.propTypes = {
	children: PropTypes.node,
};
