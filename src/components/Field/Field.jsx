import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

export const Field = ({
	gameState: { field, currentPlayer, isGameEnded },
	setGameState,
}) => {
	const onClick = (i) => {
		if (field[i] !== '') {
			return alert('This cell is already fulfilled. Please choose another cell.');
		}

		let updatedField = [...field];
		updatedField[i] = currentPlayer;
		setGameState((prev) => ({
			...prev,
			field: updatedField,
			currentPlayer: currentPlayer === 'X' ? '0' : 'X',
		}));
	};
	return <FieldLayout field={field} onClick={onClick} isGameEnded={isGameEnded} />;
};

Field.propTypes = {
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
