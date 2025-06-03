import styles from './InformationLayout.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectXscore, selectOscore } from '../../selectors';

export const InformationLayout = ({ getGameMessage }) => {
	const xScore = useSelector(selectXscore);
	const oScore = useSelector(selectOscore);

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
