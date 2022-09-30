import { ReactFlowProvider } from 'react-flow-renderer';
import { AddDefaultNodeButton } from './components/AddDefaultNodeButton';
import { AddTriggerNodeButton } from './components/AddTriggerNodeButton';
import { Button } from './components/Button';
import { Flow } from './components/Flow';
import { GlobalStyle } from './styles/global';

export function App() {
	return (
		<>
			<GlobalStyle />
			<h1>Hello, React Flow Renderer Example!</h1>
			<ReactFlowProvider>
				<Flow />
				<Button />
				<AddDefaultNodeButton />
				<AddTriggerNodeButton />
			</ReactFlowProvider>
		</>
	);
}
