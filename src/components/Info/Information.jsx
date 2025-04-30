import { InformationLayout } from './InformationLayout';
import PropTypes from 'prop-types';
import { WIN_PATTERNS } from '../constants';
import { useCallback, useEffect } from 'react';

export const Information = ({
	gameState: { field, isGameEnded, winner, xScore, oScore, isDraw, currentPlayer },
	setGameState,
}) => {
	const checkWinner = useCallback(() => {
		for (let pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (field[a] !== '' && field[a] === field[b] && field[a] === field[c]) {
				if (!isGameEnded) {
					setGameState((prev) => ({
						...prev,
						isGameEnded: true,
						isDraw: false,
						winner: field[a],
					}));

					field[a] === 'X'
						? setGameState((prev) => ({ ...prev, xScore: prev.xScore + 1 }))
						: setGameState((prev) => ({ ...prev, oScore: prev.oScore + 1 }));
				}
				return;
			}
		}

		if (!field.includes('') && winner === '' && !isGameEnded) {
			setGameState((prev) => ({ ...prev, isGameEnded: true, isDraw: true }));
		}
	}, [field, isGameEnded, setGameState, winner]);

	useEffect(() => {
		checkWinner();
	}, [checkWinner]);

	const getGameMessage = () => {
		if (isGameEnded) {
			if (isDraw) {
				return 'It is a Tie!';
			}
			if (winner) {
				return `Game ended. The winner is ${winner}`;
			}
		} else {
			return `Now is ${currentPlayer}'s turn`;
		}
	};

	return (
		<InformationLayout
			getGameMessage={getGameMessage}
			xScore={xScore}
			oScore={oScore}
		/>
	);
};

Information.propTypes = {
	gameState: PropTypes.shape({
		currentPlayer: PropTypes.string,
		isGameEnded: PropTypes.bool,
		isDraw: PropTypes.bool,
		field: PropTypes.array,
		winner: PropTypes.string,
		xScore: PropTypes.number,
		oScore: PropTypes.number,
	}),
	setGameState: PropTypes.func,
};
