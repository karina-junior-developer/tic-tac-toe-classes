import { InformationLayout } from './InformationLayout';
import PropTypes from 'prop-types';

export const Information = ({
	isDraw,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
	currentPlayer,
	field,
	winner,
	setWinner,
	xScore,
	setXscore,
	oScore,
	setOscore,
}) => {
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const checkWinner = () => {
		for (let pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (field[a] !== '' && field[a] === field[b] && field[a] === field[c]) {
				if (!isGameEnded) {
					setIsGameEnded(true);
					setIsDraw(false);
					setWinner(field[a]);

					if (field[a] === 'X') {
						setXscore(xScore + 1);
					} else {
						setOscore(oScore + 1);
					}
				}
				return;
			}
		}

		if (!field.includes('') && winner === '' && !isGameEnded) {
			setIsGameEnded(true);
			setIsDraw(true);
		}
	};

	checkWinner();

	const getTurn = () => {
		if (!isGameEnded && !isDraw) {
			return `Now is ${currentPlayer}'s turn`;
		}
		return null;
	};

	const getGameResult = () => {
		if (isGameEnded && isDraw) {
			return 'It is a Tie!';
		} else if (isGameEnded && !isDraw && winner) {
			return `Game ended. The winner is ${winner}`;
		}
		return null;
	};

	return (
		<InformationLayout
			getGameResult={getGameResult}
			getTurn={getTurn}
			isGameEnded={isGameEnded}
			xScore={xScore}
			oScore={oScore}
		/>
	);
};

Information.propTypes = {
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	currentPlayer: PropTypes.string,
	field: PropTypes.arrayOf(PropTypes.string),
	winner: PropTypes.string,
	setWinner: PropTypes.func,
	xScore: PropTypes.number,
	setXscore: PropTypes.func,
	oScore: PropTypes.number,
	setOscore: PropTypes.func,
};
