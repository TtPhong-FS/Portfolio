import type React from "react";
import { ShootingStars, StarsBackground } from "../ui";
import { About } from "./About";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { PracticalExample } from "./PracticalExample";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

interface Props {}

export const Landing: React.FC<Props> = (props) => {
	const {} = props;
	return (
		<div className="relative">
			<ShootingStars />
			<StarsBackground />

			<div className="relative grid z-10">
				<Hero />
				<About />
				<Skills />

				<PracticalExample />

				{/* <Work /> */}
				<Projects />

				<Contact />
			</div>
		</div>
	);
};
