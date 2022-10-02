import { Container } from '@/components/Container';
import { ToolBox } from '@/components/ToolBox';
import { useReactFlowStore } from '@/stores/useReactFlowStore';
import ReactFlow, { Background } from 'react-flow-renderer';
import { ToolBoxExampleContainer } from './styles';

export function ToolBoxExample() {
	const nodes = useReactFlowStore((state) => state.nodes);
	const edges = useReactFlowStore((state) => state.edges);
	const onNodesChange = useReactFlowStore((state) => state.onNodesChange);
	const onEdgesChange = useReactFlowStore((state) => state.onEdgesChange);
	const onConnect = useReactFlowStore((state) => state.onConnect);

	return (
		<Container>
			<ToolBoxExampleContainer>
				<ReactFlow
					nodes={nodes}
					edges={edges}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					onConnect={onConnect}
					fitView
					deleteKeyCode="Delete"
				>
					<Background />
				</ReactFlow>
				<ToolBox />
			</ToolBoxExampleContainer>
		</Container>
	);
}
