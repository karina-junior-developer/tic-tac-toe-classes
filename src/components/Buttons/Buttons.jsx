import styles from './Buttons.module.css';
import { store } from '../store';

export const Buttons = () => {
	return (
		<div>
			<button
				className={styles.button}
				onClick={() => store.dispatch({ type: 'PLAY AGAIN' })}
			>
				Play again
			</button>
			<button
				className={styles.button}
				onClick={() => store.dispatch({ type: 'RESET SCORE' })}
			>
				Reset score
			</button>
		</div>
	);
};
