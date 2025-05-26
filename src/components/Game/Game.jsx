import { Buttons, Field, Information } from '../game.js';

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
				<Buttons resetState={resetState} />
			</GameLayout>
		</>
	);
};
