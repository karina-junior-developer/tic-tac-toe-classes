import { FIELD_ARRAY } from '../constants/constants';
export const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: [...FIELD_ARRAY],
	winner: '',
	xScore: 0,
	oScore: 0,
};
