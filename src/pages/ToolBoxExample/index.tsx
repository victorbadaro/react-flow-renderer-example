import { Container } from '@/components/Container';
import ReactFlow, { Background } from 'react-flow-renderer';
import { ToolBoxExampleContainer } from './styles';

export function ToolBoxExample() {
	return (
		<Container>
			<ToolBoxExampleContainer>
				<ReactFlow
					style={{
						height: '500px'
					}}
				>
					<Background />
				</ReactFlow>
			</ToolBoxExampleContainer>
		</Container>
	);
}
