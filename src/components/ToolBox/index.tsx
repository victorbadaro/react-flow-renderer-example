import { useReactFlowStore } from '@/stores/useReactFlowStore';
import { Node } from 'react-flow-renderer';
import { FiGithub, FiGitlab } from 'react-icons/fi';
import { ToolBoxContainer } from './styles';

export function ToolBox() {
	const addNode = useReactFlowStore((state) => state.addNode);

	function handleToolButtonClick(nodeType: string) {
		const newNode: Node = {
			id: crypto.randomUUID(),
			type: nodeType,
			data: {},
			position: {
				x: 0,
				y: 0
			}
		};

		addNode(newNode);
	}

	return (
		<ToolBoxContainer>
			<button
				type="button"
				onClick={() => handleToolButtonClick('github')}
			>
				<FiGithub />
			</button>
			<button
				type="button"
				onClick={() => handleToolButtonClick('gitlab')}
			>
				<FiGitlab />
			</button>
		</ToolBoxContainer>
	);
}
