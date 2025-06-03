import { Buttons, Field, Information } from '../index.js';
import { GameLayout } from './GameLayout.jsx';

export const Game = () => {
	return (
		<>
			<GameLayout>
				<Information />
				<Field />
				<Buttons />
			</GameLayout>
		</>
	);
};
