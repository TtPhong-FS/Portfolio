import { GraduationTimeline } from "../GraduationTimeline";
import { Spotlight } from "../ui";

export const About = () => {
	return (
		<section
			className="scroll-mt-20 md:scroll-mt-24 relative px-4 my-20 md:my-40 md:px-8 bg-white dark:bg-black"
			id="about"
		>
			<Spotlight className="top-1/4 text-purple-400 right-60 translate-x-1/4 opacity-60" />
			<div className="max-w-7xl mx-auto w-full">
				<div className="text-center mb-16">
					<span className="mb-2 block font-medium text-neutral-600 dark:text-neutral-300 text-center text-sm md:text-lg">
						Introduce
					</span>
					<h4 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-800 dark:from-neutral-100 dark:to-neutral-500">
						About me
					</h4>
				</div>
				<GraduationTimeline />
			</div>
		</section>
	);
};
