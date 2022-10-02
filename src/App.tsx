import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import { GlobalStyle } from './styles/global';

export function App() {
	return (
		<>
			<GlobalStyle />
			<Router>
				<AppRoutes />
			</Router>
		</>
	);
}
