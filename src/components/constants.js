const FIELD_ARRAY = ['', '', '', '', '', '', '', '', ''];

export const INITIAL_GAME_STATE = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: FIELD_ARRAY,
	winner: '',
	xScore: 0,
	oScore: 0,
};

export const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
