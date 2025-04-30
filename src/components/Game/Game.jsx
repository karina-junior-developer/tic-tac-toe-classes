import { Field } from '../Field/Field.jsx';
import { Information } from '../Info/Information.jsx';
import { GameLayout } from './GameLayout.jsx';
import { useState } from 'react';
import { INITIAL_GAME_STATE } from '../constants.js';

export const Game = () => {
	const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

	const resetState = (shouldUpdateState = false) => {
		setGameState((prev) => {
			return shouldUpdateState
				? INITIAL_GAME_STATE
				: { ...INITIAL_GAME_STATE, xScore: prev.xScore, oScore: prev.oScore };
		});
	};

	return (
		<>
			<GameLayout>
				<Information gameState={gameState} setGameState={setGameState} />
				<Field gameState={gameState} setGameState={setGameState} />
			</GameLayout>
			<button onClick={() => resetState(false)}>Play again</button>
			<button onClick={() => resetState(true)}>Reset score</button>
		</>
	);
};
