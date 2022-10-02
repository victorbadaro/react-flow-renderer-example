import { Handle, Position } from 'react-flow-renderer';
import { FiGitlab } from 'react-icons/fi';
import { GitLabNodeContainer } from './styles';

export function GitLabNode() {
	return (
		<GitLabNodeContainer>
			<Handle
				type="source"
				position={Position.Left}
			/>
			<FiGitlab />
			<span>GitLab</span>
			<Handle
				type="target"
				position={Position.Right}
			/>
		</GitLabNodeContainer>
	);
}
