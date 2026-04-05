import { Footer, Header } from "@/components";
import { NotFoundPage } from "@/pages";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Separator, ThemeProvider } from "@ttpfs/ui-react";
import "../bootstrap";
import "../styles.css";
import appCss from "../styles.css?url";

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
				title: "TtPhong.dev",
			},
		],
	}),
	notFoundComponent: NotFoundPage,
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="font-sans antialiased relative">
				<ThemeProvider
					attribute={"class"}
					disableTransitionOnChange
					enableSystem
				>
					<div className="sticky top-0 z-20 ">
						<Header />
					</div>
					<Separator />
					<main className="grid z-10 grid-rows-[auto_1fr]">{children}</main>
					<Footer />
				</ThemeProvider>
				<Scripts />
			</body>
		</html>
	);
}
