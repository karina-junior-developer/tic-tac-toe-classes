import styles from './GameLayout.module.css';
import PropTypes from 'prop-types';

export const GameLayout = ({ children }) => {
	return <div className={styles['game-layout']}>{children}</div>;
};

GameLayout.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element),
};
