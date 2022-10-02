import { FiGithub, FiGitlab } from 'react-icons/fi';
import { ToolBoxContainer } from './styles';

export function ToolBox() {
	return (
		<ToolBoxContainer>
			<button type="button">
				<FiGithub />
			</button>
			<button type="button">
				<FiGitlab />
			</button>
		</ToolBoxContainer>
	);
}
