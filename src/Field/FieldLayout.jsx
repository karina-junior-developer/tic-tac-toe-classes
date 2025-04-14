import styles from './FieldLayout.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, onClick, isGameEnded }) => {
	return (
		<div className={styles['game-field-block']}>
			<ul className={styles.list}>
				{field.map((symbol, index) => {
					return (
						<li key={index}>
							<button
								className={styles.buttons}
								onClick={() => onClick(index)}
								disabled={isGameEnded && field.includes('')}
							>
								{symbol}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	onClick: PropTypes.func,
	isGameEnded: PropTypes.bool,
};
