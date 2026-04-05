import {
	PracticeExampleForm,
	PracticeExampleTable,
} from "@/features/practice-examples";
import type React from "react";

interface Props {}

export const PracticalExample: React.FC<Props> = (props) => {
	const {} = props;
	return (
		<section
			aria-labelledby="practice-example-heading"
			className="px-4 md:px-8 relative z-20 max-w-7xl mx-auto w-full rounded-lg py-6 md:py-12 my-20 bg-neutral-50 dark:bg-neutral-950 md:my-40 scroll-mt-20 md:scroll-mt-24"
			id="examples"
		>
			<div className="mb-16 text-center">
				<h2
					className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-800 dark:from-neutral-100 dark:to-neutral-500"
					id="practice-example-heading"
				>
					Practical Examples
				</h2>
				<p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
					Real-world patterns implemented with mock APIs
				</p>
				<p className="mt-4 text-left text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto">
					A collection of focused examples demonstrating form handling, data
					tables, and server state management using simulated APIs. These
					examples highlight architecture decisions, state management patterns,
					and maintainable code practices.
				</p>
			</div>

			<div className="max-w-7xl mx-auto w-full">
				<PracticeExampleForm />

				<PracticeExampleTable />
			</div>
		</section>
	);
};
