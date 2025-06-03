import { FieldLayout } from './FieldLayout';
import { useDispatch, useSelector } from 'react-redux';
import { makeMove } from '../../actions';
import { selectField } from '../../selectors';

export const Field = () => {
	const dispatch = useDispatch();
	const field = useSelector(selectField);

	const onClick = (i) => {
		if (field[i] !== '') {
			return alert('This cell is already fulfilled. Please choose another cell.');
		}

		dispatch(makeMove(i));
	};
	return <FieldLayout onClick={onClick} />;
};
