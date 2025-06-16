import { connect } from 'react-redux';
import { InformationLayout } from './InformationLayout';
import { WIN_PATTERNS } from '../../constants/constants';
import { Component } from 'react';

import { setDraw, setGameEnded } from '../../actions';

class MainInformation extends Component {
	componentDidUpdate(prevProps) {
		const { field, isGameEnded, winner } = this.props;

		const fieldChanged = field !== prevProps.field;
		const gameNotEnded = !isGameEnded && winner === '';

		if (fieldChanged && gameNotEnded) {
			this.checkWinner();
		}
	}

	checkWinner = () => {
		const { field, isGameEnded, winner, dispatch } = this.props;

		for (let pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (field[a] !== '' && field[a] === field[b] && field[a] === field[c]) {
				if (!isGameEnded) {
					dispatch(setGameEnded(a));
				}
				return;
			}
		}

		const boardFull = field.every((cell) => cell !== '');
		if (boardFull && winner === '' && !isGameEnded) {
			dispatch(setDraw());
		}
	};

	getGameMessage = () => {
		const { isGameEnded, isDraw, winner, currentPlayer } = this.props;

		if (isGameEnded) {
			if (isDraw) return 'It is a Tie!';
			if (winner) return `Game ended. The winner is ${winner}`;
		}
		return `Now is ${currentPlayer}'s turn`;
	};

	render() {
		return <InformationLayout gameMessage={this.getGameMessage()} />;
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
	isGameEnded: state.isGameEnded,
	winner: state.winner,
	isDraw: state.isDraw,
	currentPlayer: state.currentPlayer,
});

export const Information = connect(mapStateToProps)(MainInformation);
