import { Handle, Position } from 'react-flow-renderer';
import { FiGithub } from 'react-icons/fi';
import { GitHubNodeContainer } from './styles';

export function GitHubNode() {
	return (
		<GitHubNodeContainer>
			<Handle
				type="source"
				position={Position.Left}
			/>
			<FiGithub />
			<span>GitHub</span>
			<Handle
				type="target"
				position={Position.Right}
			/>
		</GitHubNodeContainer>
	);
}
