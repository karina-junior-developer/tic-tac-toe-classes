import { useSyncExternalStore } from 'react';
import { store } from './store';

export const useStore = (selector) => {
	return useSyncExternalStore(store.subscribe, () => selector(store.getState()));
};
