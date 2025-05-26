const field_array = ['', '', '', '', '', '', '', '', ''];

export const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: field_array,
	winner: '',
	xScore: 0,
	oScore: 0,
};

export const gameReducer = (state = initialState, action) => {
	const { type, payload = {} } = action;
	const { index } = payload;
	switch (type) {
		case 'SET GAME DATA': {
			return payload;
		}
		case 'SET X WINNER': {
			return {
				...state,
				isGameEnded: true,
				isDraw: false,
				winner: 'X',
				xScore: state.xScore + 1,
			};
		}
		case 'SET O WINNER': {
			return {
				...state,
				isGameEnded: true,
				isDraw: false,
				winner: 'O',
				oScore: state.oScore + 1,
			};
		}
		case 'SET GAME ENDED': {
			return {
				...state,
				isGameEnded: true,
				isDraw: false,
				winner: state.field[index],
			};
		}
		case 'SET DRAW': {
			return {
				...state,
				isGameEnded: true,
				isDraw: true,
			};
		}
		case 'MAKE MOVE': {
			if (state.field[index] !== '' || state.isGameEnded) {
				return state;
			}

			const updatedField = [...state.field];
			updatedField[index] = state.currentPlayer;

			return {
				...state,
				field: updatedField,
				currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
			};
		}
		case 'PLAY AGAIN': {
			return {
				...initialState,
				xScore: state.xScore,
				oScore: state.oScore,
			};
		}
		case 'RESET SCORE': {
			return {
				...initialState,
			};
		}

		default:
			return state;
	}
};
