import { RootLayout } from "@/layout/RootLayout";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { NotificationProvider } from "@ttpfs/ui-react";

export const Route = createRootRoute({
	component: () => (
		<>
			<NotificationProvider placement="top end" />
			<RootLayout>
				<Outlet />
			</RootLayout>
		</>
	),
});
