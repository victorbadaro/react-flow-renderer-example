import { AppLayout } from '@/layouts/AppLayout';
import { ToolBoxExample } from '@/pages/ToolBoxExample';
import { Navigate, Route, Routes } from 'react-router-dom';

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route index element={<Navigate to="toolbox-example" />} />
				<Route path="toolbox-example" element={<ToolBoxExample />} />
			</Route>
		</Routes>
	);
}
