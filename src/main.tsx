import {
	createRouter as createTanStackRouter,
	RouterProvider,
} from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import "./bootstrap";
import reportWebVitals from "./reportWebVitals";
import { routeTree } from "./routeTree.gen";
import "./styles.css";

const router = createTanStackRouter({
	defaultPreload: "intent",
	defaultPreloadStaleTime: 0,
	defaultStructuralSharing: true,
	routeTree,
	scrollRestoration: true,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

// Render the app
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(<RouterProvider router={router} />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
