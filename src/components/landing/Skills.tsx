import { Chip } from "@ttpfs/ui-react";
import type React from "react";
import { BackgroundGradient } from "../ui";

interface Props {}

interface SkillCardItem {
	title: string;
	items: string[];
	description: string;
}

const SkillCard = (props: SkillCardItem) => {
	const { description, items, title } = props;

	return (
		<BackgroundGradient className="rounded-3xl h-full max-w-sm p-4 md:p-8 bg-white dark:bg-neutral-900">
			<div className="relative z-10 h-full">
				<h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
					{title}
				</h3>

				<div className="flex flex-wrap gap-2 mb-4">
					{items.map((item) => (
						<Chip key={item}>{item}</Chip>
					))}
				</div>

				<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
					{description}
				</p>
			</div>
		</BackgroundGradient>
	);
};

export const Skills: React.FC<Props> = (props) => {
	const {} = props;
	return (
		<section
			aria-labelledby="skills-heading"
			className="px-4 scroll-mt-20 md:scroll-mt-24 relative overflow-hidden md:px-8 my-20 md:my-40"
			id="skills"
		>
			<div className="mb-16 text-center">
				<h2
					className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-800 dark:from-neutral-100 dark:to-neutral-500"
					is="skills-heading"
				>
					Skills & Tools
				</h2>
				<p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
					Technologies I use to build scalable systems and reusable
					architectures.
				</p>
			</div>

			<div className="grid md:grid-cols-3 px-20 pb-20 max-w-6xl mx-auto w-full gap-4 md:gap-8 grid-cols-1">
				<SkillCard
					description="Building maintainable user interfaces, managing client state and complex form workflows."
					items={["React", "TypeScript", "TanStack Router", "React Hook Form"]}
					title="Frontend Architecture"
				/>

				<SkillCard
					description="Designing APIs, handling business logic, and structuring scalable backend systems Hexagonal Architecture-based."
					items={[
						"Java (Spring Boot)",
						"REST APIs",
						"Domain-driven design",
						"Layered architecture",
					]}
					title="Backend Architecture"
				/>

				<SkillCard
					description="Managing server state, data fetching, and designing flexible query mechanisms."
					items={["TanStack Query", "TanStack Table", "RSQL Parser", "JOOQ"]}
					title="Data & Query Layer"
				/>

				<SkillCard
					description="Ensuring data integrity with type-safe validation across client and server."
					items={["Zod"]}
					title="Validation & Schema"
				/>

				<SkillCard
					description="Ensuring reliability through unit, integration, and end-to-end testing, along with UI documentation."
					items={["Vitest", "Playwright", "Storybook"]}
					title="Testing & Quality"
				/>

				<SkillCard
					description="Optimizing developer experience and maintaining scalable, high-quality codebases."
					items={["Vite", "pnpm", "Biome", "Git"]}
					title="Tooling & DX"
				/>
			</div>
		</section>
	);
};
