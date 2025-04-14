import { Field } from '../Field/Field.jsx';
import { Information } from '../Info/Information.jsx';
import { GameLayout } from './GameLayout.jsx';
import { useState } from 'react';

export const Game = () => {
	const fieldArray = ['', '', '', '', '', '', '', '', ''];

	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(fieldArray);
	const [winner, setWinner] = useState('');
	const [xScore, setXscore] = useState(0);
	const [oScore, setOscore] = useState(0);

	const startOver = () => {
		setCurrentPlayer('X');
		setField(fieldArray);
		setIsDraw(false);
		setIsGameEnded(false);
		setWinner('');
	};

	const resetScore = () => {
		setXscore(0);
		setOscore(0);
		setCurrentPlayer('X');
		setField(fieldArray);
		setIsDraw(false);
		setIsGameEnded(false);
		setWinner('');
	};

	return (
		<>
			<GameLayout>
				<Information
					isDraw={isDraw}
					setIsDraw={setIsDraw}
					isGameEnded={isGameEnded}
					setIsGameEnded={setIsGameEnded}
					currentPlayer={currentPlayer}
					field={field}
					winner={winner}
					setWinner={setWinner}
					xScore={xScore}
					setXscore={setXscore}
					oScore={oScore}
					setOscore={setOscore}
				/>
				<Field
					field={field}
					setField={setField}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					isGameEnded={isGameEnded}
				/>
			</GameLayout>
			<button onClick={startOver}>
				{field.includes('') ? 'Start over' : 'Play again'}
			</button>
			<button onClick={resetScore}>Reset score</button>
		</>
	);
};
