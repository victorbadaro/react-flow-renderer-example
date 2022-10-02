import { Container } from '@/components/Container';
import ReactFlow, { Background } from 'react-flow-renderer';

export function ToolBoxExample() {
	return (
		<Container>
			<ReactFlow
				style={{
					height: '500px'
				}}
			>
				<Background />
			</ReactFlow>
		</Container>
	);
}
