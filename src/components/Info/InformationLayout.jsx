import styles from './InformationLayout.module.css';
import PropTypes from 'prop-types';
import { useStore } from '../useStore';

export const InformationLayout = ({ getGameMessage }) => {
	const xScore = useStore((state) => state.xScore);
	const oScore = useStore((state) => state.oScore);

	return (
		<div className={styles.information}>
			<h2>{getGameMessage()}</h2>
			<div className={styles.x}>X score: {xScore}</div>
			<div className={styles.o}>0 score: {oScore}</div>
		</div>
	);
};

InformationLayout.propTypes = {
	getGameMessage: PropTypes.func,
};
