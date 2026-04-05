import type React from "react";

interface Props {}

export const Projects: React.FC<Props> = (props) => {
	const {} = props;
	return (
		<section
			aria-labelledby="projects-heading"
			className="px-4 scroll-mt-20 md:scroll-mt-24 md:px-8 my-20 md:my-40"
			id="projects"
		>
			<div className="mb-16 text-center">
				<h2
					className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-800 dark:from-neutral-100 dark:to-neutral-500"
					id="projects-heading"
				>
					Personal Projects
				</h2>
				<p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
					Exploring reusable UI systems, custom query DSLs, and scalable
					frontend architecture.
				</p>
			</div>
		</section>
	);
};
