import { About } from "@/components/landing/About";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: PageComponent,
});

function PageComponent() {
	return <About />;
}
