import styles from './FieldLayout.module.css';
import PropTypes from 'prop-types';
import { useStore } from '../useStore';

export const FieldLayout = ({ onClick }) => {
	const field = useStore((state) => state.field);
	const isGameEnded = useStore((state) => state.isGameEnded);

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
