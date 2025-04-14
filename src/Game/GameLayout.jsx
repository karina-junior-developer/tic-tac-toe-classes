import styles from './GameLayout.module.css';

export const GameLayout = ({ children }) => {
	return <div className={styles['game-layout']}>{children}</div>;
};
