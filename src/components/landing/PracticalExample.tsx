import {
	PracticeExampleForm,
	PracticeExampleTable,
} from "@/features/practice-examples";
import { Separator } from "@ttpfs/ui-react";
import type React from "react";
import { SectionContainer } from "../SectionContainer";

interface Props {}

export const PracticalExample: React.FC<Props> = (props) => {
	const {} = props;

	return (
		<SectionContainer
			aria-labelledby="practice-example-heading"
			className="px-0!"
			id="examples"
		>
			<div className="mb-16 text-center px-4 sm:px-6 lg:px-8">
				<h2
					className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-900 dark:from-neutral-50 dark:to-neutral-500"
					id="practice-example-heading"
				>
					Practical Examples
				</h2>
				<p className="mt-2 text-base text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
					Real-world patterns implemented with mock APIs
				</p>
				<p className="mt-4 text-center text-sm md:text-base text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto">
					A collection of focused examples demonstrating form handling, data
					tables, and server state management using simulated APIs. These
					examples highlight architecture decisions, state management patterns,
					and maintainable code practices.
				</p>
			</div>

			<div className="bg-neutral-50 dark:bg-neutral-950 max-w-7xl mx-auto w-full py-6 md:py-12 px-4 lg:px-8 rounded-2xl">
				<PracticeExampleForm />

				<Separator className="my-8" />

				<PracticeExampleTable />
			</div>
		</SectionContainer>
	);
};
