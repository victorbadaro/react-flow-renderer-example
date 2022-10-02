import { Container } from '@/components/Container';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './styles';

export function Header() {
	return (
		<HeaderContainer>
			<Container>
				<nav>
					<Link to="/toolbox-example">ToolBox Example</Link>
				</nav>
			</Container>
		</HeaderContainer>
	);
}
