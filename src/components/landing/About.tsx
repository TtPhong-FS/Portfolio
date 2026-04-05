import { GraduationTimeline } from "../GraduationTimeline";
import { SectionContainer } from "../SectionContainer";
import { Spotlight } from "../ui";

export const About = () => {
	return (
		<SectionContainer id="about">
			<Spotlight className="top-1/4 text-purple-400 right-60 translate-x-1/4 opacity-60" />
			<div className="max-w-7xl mx-auto w-full">
				<div className="text-center mb-16">
					<span className="mb-2 block font-medium text-neutral-600 dark:text-neutral-300 text-center text-base md:text-lg">
						Introduce
					</span>
					<h4 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-900 dark:from-neutral-50 dark:to-neutral-500">
						About me
					</h4>
				</div>
				<GraduationTimeline />
			</div>
		</SectionContainer>
	);
};
