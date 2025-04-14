import styles from './InformationLayout.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({
	getGameResult,
	getTurn,
	isGameEnded,
	xScore,
	oScore,
}) => {
	return (
		<div className={styles.information}>
			<h2>{isGameEnded ? getGameResult() : getTurn()}</h2>
			<div className={styles.x}>X score: {xScore}</div>
			<div className={styles.o}>0 score: {oScore}</div>
		</div>
	);
};

InformationLayout.propTypes = {
	getGameResult: PropTypes.func,
	getTurn: PropTypes.func,
	isGameEnded: PropTypes.bool,
};
