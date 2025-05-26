import { FieldLayout } from './FieldLayout';
import { store } from '../store';
import { useStore } from '../useStore';

export const Field = () => {
	const field = useStore((state) => state.field);

	const onClick = (i) => {
		if (field[i] !== '') {
			return alert('This cell is already fulfilled. Please choose another cell.');
		}

		store.dispatch({ type: 'MAKE MOVE', payload: { index: i } });
	};
	return <FieldLayout onClick={onClick} />;
};
