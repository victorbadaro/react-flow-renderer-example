import { Header } from '@/components/Header';
import GitHubCorner from 'react-github-corner';
import { Outlet } from 'react-router-dom';
import { AppLayoutContainer } from './styles';

export function AppLayout() {
	return (
		<AppLayoutContainer>
			<GitHubCorner
				href="https://github.com/victorbadaro/react-flow-renderer-example"
				target="_blank"
				bannerColor="#111"
				octoColor="#222"
			/>
			<Header />
			<Outlet />
		</AppLayoutContainer>
	);
}
