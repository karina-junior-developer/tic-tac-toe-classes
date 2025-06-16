import { connect } from 'react-redux';
import { Component } from 'react';
import { resetScore, playAgain } from '../../actions';
import PropTypes from 'prop-types';

class ButtonsLayout extends Component {
	render() {
		const { resetScore, playAgain } = this.props;
		return (
			<div className="buttons-wrapper">
				<button className="bottom-button" onClick={playAgain}>
					Play again
				</button>
				<button className="bottom-button" onClick={resetScore}>
					Reset score
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = {
	resetScore,
	playAgain,
};

export const Buttons = connect(null, mapDispatchToProps)(ButtonsLayout);

ButtonsLayout.propTypes = {
	resetScore: PropTypes.func,
	playAgain: PropTypes.func,
};
