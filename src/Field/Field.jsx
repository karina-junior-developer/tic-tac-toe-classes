import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
}) => {
	const onClick = (i) => {
		if (field[i] !== '') {
			return alert('This cell is already fulfilled. Please choose another cell.');
		}

		let updatedField = [...field];
		updatedField[i] = currentPlayer;
		setField(updatedField);
		setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		console.log(updatedField);
	};
	return <FieldLayout field={field} onClick={onClick} isGameEnded={isGameEnded} />;
};

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
};
