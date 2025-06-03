import styles from './FieldLayout.module.css';
import PropTypes from 'prop-types';
import { selectField, selectIsGameEnded } from '../../selectors';
import { useSelector } from 'react-redux';

export const FieldLayout = ({ onClick }) => {
	const field = useSelector(selectField);
	const isGameEnded = useSelector(selectIsGameEnded);

	return (
		<div className={styles['game-field-block']}>
			<ul className={styles.list}>
				{field.map((symbol, index) => {
					return (
						<li key={index}>
							<button
								className={styles.buttons}
								onClick={() => onClick(index)}
								disabled={isGameEnded}
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
	onClick: PropTypes.func,
};
