import { AppLayout } from '@/layouts/AppLayout';
import { ToolBoxExample } from '@/pages/ToolBoxExample';
import { Route, Routes } from 'react-router-dom';

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route index element={<ToolBoxExample />} />
			</Route>
		</Routes>
	);
}
