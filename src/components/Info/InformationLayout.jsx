import styles from './InformationLayout.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ getGameMessage, xScore, oScore }) => {
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
	xScore: PropTypes.number,
	oScore: PropTypes.number,
};
