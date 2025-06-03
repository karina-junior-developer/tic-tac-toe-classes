import { InformationLayout } from './InformationLayout';
import { WIN_PATTERNS } from '../../constants/constants';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_X_WINNER, SET_O_WINNER, SET_DRAW, setGameEnded } from '../../actions';
import {
	selectField,
	selectIsGameEnded,
	selectWinner,
	selectIsDraw,
	selectCurrentPlayer,
} from '../../selectors';

export const Information = () => {
	const dispatch = useDispatch();
	const field = useSelector(selectField);
	const isGameEnded = useSelector(selectIsGameEnded);
	const winner = useSelector(selectWinner);
	const isDraw = useSelector(selectIsDraw);
	const currentPlayer = useSelector(selectCurrentPlayer);

	const checkWinner = useCallback(() => {
		for (let pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (field[a] !== '' && field[a] === field[b] && field[a] === field[c]) {
				if (!isGameEnded) {
					dispatch(setGameEnded(a));

					field[a] === 'X' ? dispatch(SET_X_WINNER) : dispatch(SET_O_WINNER);
				}
				return;
			}
		}

		if (!field.includes('') && winner === '' && !isGameEnded) {
			dispatch(SET_DRAW);
		}
	}, [field, isGameEnded, winner, dispatch]);

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

	return <InformationLayout getGameMessage={getGameMessage} />;
};
