import styles from './Buttons.module.css';
import PropTypes from 'prop-types';

export const Buttons = ({ resetState }) => {
	return (
		<div>
			<button className={styles.button} onClick={() => resetState(false)}>
				Play again
			</button>
			<button className={styles.button} onClick={() => resetState(true)}>
				Reset score
			</button>
		</div>
	);
};

Buttons.propTypes = {
	resetState: PropTypes.func,
};
