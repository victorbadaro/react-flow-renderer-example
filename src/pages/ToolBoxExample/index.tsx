import { Container } from '@/components/Container';
import { ToolBox } from '@/components/ToolBox';
import ReactFlow, { Background } from 'react-flow-renderer';
import { ToolBoxExampleContainer } from './styles';

export function ToolBoxExample() {
	return (
		<Container>
			<ToolBoxExampleContainer>
				<ReactFlow>
					<Background />
				</ReactFlow>
				<ToolBox />
			</ToolBoxExampleContainer>
		</Container>
	);
}
