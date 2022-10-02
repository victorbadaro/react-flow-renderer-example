import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom';
import { AppLayoutContainer } from './styles';

export function AppLayout() {
	return (
		<AppLayoutContainer>
			<Header />
			<Outlet />
		</AppLayoutContainer>
	);
}
