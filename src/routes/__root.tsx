import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Separator, ThemeProvider } from "@ttpfs/ui-react";
import appCss from "../styles.css?url";
import "../styles.css";
import "../bootstrap";
import { Footer, Header } from "@/components";

export const Route = createRootRoute({
	head: () => ({
		links: [
			{
				href: appCss,
				rel: "stylesheet",
			},
		],
		meta: [
			{
				charSet: "utf-8",
			},
			{
				content: "width=device-width, initial-scale=1",
				name: "viewport",
			},
			{
				title: "Trần Thanh Phong - Portfolio",
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="font-sans antialiased h-screen">
				<ThemeProvider
					attribute={"class"}
					disableTransitionOnChange
					enableSystem
				>
					<Header />
					<Separator />
					<main className="grid h-full grid-rows-[auto_1fr]">{children}</main>
					<Separator className="mt-20" />
					<Footer />
					<Scripts />
				</ThemeProvider>
			</body>
		</html>
	);
}
