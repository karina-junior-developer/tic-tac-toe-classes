import styles from './Buttons.module.css';
import { useDispatch } from 'react-redux';
import { RESET_SCORE, PLAY_AGAIN } from '../../actions';

export const Buttons = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<button className={styles.button} onClick={() => dispatch(PLAY_AGAIN)}>
				Play again
			</button>
			<button className={styles.button} onClick={() => dispatch(RESET_SCORE)}>
				Reset score
			</button>
		</div>
	);
};
