import { initialState } from '../initialstate/initialState';
import { FIELD_ARRAY } from '../constants/constants';

export const gameReducer = (state = initialState, action) => {
	const { type, payload = {} } = action;
	const { index } = payload;

	switch (type) {
		case 'SET_X_WINNER':
			return {
				...state,
				isGameEnded: true,
				isDraw: false,
				winner: 'X',
				xScore: state.xScore + 1,
			};
		case 'SET_O_WINNER':
			return {
				...state,
				isGameEnded: true,
				isDraw: false,
				winner: 'O',
				oScore: state.oScore + 1,
			};
		case 'SET_DRAW':
			return { ...state, isGameEnded: true, isDraw: true };
		case 'MAKE_MOVE': {
			if (state.field[index] !== '' || state.isGameEnded) return state;
			const updatedField = [...state.field];
			updatedField[index] = state.currentPlayer;
			return {
				...state,
				field: updatedField,
				currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
			};
		}

		case 'SET_GAME_ENDED': {
			const winningPlayer = state.field[index];
			return {
				...state,
				isGameEnded: true,
				isDraw: false,
				winner: winningPlayer,
				xScore: winningPlayer === 'X' ? state.xScore + 1 : state.xScore,
				oScore: winningPlayer === 'O' ? state.oScore + 1 : state.oScore,
			};
		}
		case 'PLAY_AGAIN':
			return {
				...state,
				currentPlayer: 'X',
				isGameEnded: false,
				isDraw: false,
				field: [...FIELD_ARRAY],
				winner: '',
			};
		case 'RESET_SCORE':
			return { ...initialState, field: [...FIELD_ARRAY] };
		default:
			return state;
	}
};
