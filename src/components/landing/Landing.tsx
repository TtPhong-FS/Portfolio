import type React from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Hero } from "./Hero";

interface Props {}

export const Landing: React.FC<Props> = (props) => {
	const {} = props;
	return (
		<div className="w-full grid">
			<Hero />
			<About />
			{/* <Work /> */}
			{/* <Project /> */}
			<Contact />
		</div>
	);
};
