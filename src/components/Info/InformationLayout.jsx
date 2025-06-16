import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectXscore, selectOscore } from '../../selectors';
import { Component } from 'react';

class MainInformationLayout extends Component {
	render() {
		const { xScore, oScore } = this.props;

		return (
			<div className="mt-5 text-center">
				<h2 className="mb-1 text-xl font-semibold">{this.props.gameMessage}</h2>
				<div className="mt-2 text-lg">X score: {xScore}</div>
				<div className="text-lg">O score: {oScore}</div>
			</div>
		);
	}
}

MainInformationLayout.propTypes = {
	getGameMessage: PropTypes.string,
	xScore: PropTypes.number,
	oScore: PropTypes.number,
};

const mapStateToProps = (state) => ({
	xScore: selectXscore(state),
	oScore: selectOscore(state),
});

export const InformationLayout = connect(mapStateToProps)(MainInformationLayout);
