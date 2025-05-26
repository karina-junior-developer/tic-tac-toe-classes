import { gameReducer } from './reducer';

const createStore = (reducer) => {
	let state = reducer(undefined, {});
	let listeners = new Set();

	return {
		dispatch: (action) => {
			state = reducer(state, action);
			listeners.forEach((listener) => listener());
		},
		getState: () => state,
		subscribe: (listener) => {
			listeners.add(listener);
			return () => {
				listeners.delete(listener);
			};
		},
	};
};

export const store = createStore(gameReducer);
