import { Footer, Header } from "@/components";
import { Separator, ThemeProvider } from "@ttpfs/ui-react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import type React from "react";
import { type PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export const RootLayout: React.FC<Props> = (props) => {
	const { children } = props;
	return (
		<ThemeProvider attribute={"class"} disableTransitionOnChange enableSystem>
			<Analytics />
			<SpeedInsights />
			<div className="sticky top-0 z-20 ">
				<Header />
			</div>
			<Separator />
			<main className="grid z-10 grid-rows-[auto_1fr]">{children}</main>
			<Footer />
		</ThemeProvider>
	);
};
