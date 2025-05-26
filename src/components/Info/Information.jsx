import { InformationLayout } from './InformationLayout';
import { WIN_PATTERNS } from '../constants';
import { useCallback, useEffect } from 'react';
import { store } from '../store';
import { useStore } from '../useStore';

export const Information = () => {
	const field = useStore((state) => state.field);
	const isGameEnded = useStore((state) => state.isGameEnded);
	const winner = useStore((state) => state.winner);
	const isDraw = useStore((state) => state.isDraw);
	const currentPlayer = useStore((state) => state.currentPlayer);

	const checkWinner = useCallback(() => {
		for (let pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (field[a] !== '' && field[a] === field[b] && field[a] === field[c]) {
				if (!isGameEnded) {
					store.dispatch({ type: 'SET GAME ENDED', payload: { index: a } });

					field[a] === 'X'
						? store.dispatch({ type: 'SET X WINNER' })
						: store.dispatch({ type: 'SET O WINNER' });
				}
				return;
			}
		}

		if (!field.includes('') && winner === '' && !isGameEnded) {
			store.dispatch({ type: 'SET DRAW' });
		}
	}, [field, isGameEnded, winner]);

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
