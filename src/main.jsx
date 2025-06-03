import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Game } from './components/Game/Game';
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));

root.render(
	<StrictMode>
		<Provider store={store}>
			<Game />
		</Provider>
	</StrictMode>,
);
