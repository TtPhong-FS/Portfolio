import { CodeBlock } from "@/components";
import { Tabs } from "@ttpfs/ui-react";
import type React from "react";
import {
	UserProfileSetupForm,
	UserProfileSetupFormCode,
	userProfileSchemaCode,
} from "./form";
import { PracticeExampleCard } from "./PracticeExampleCard";

interface Props {}

export const PracticeExampleForm: React.FC<Props> = (props) => {
	const {} = props;
	return (
		<div>
			<div className="space-y-3">
				<h3 className="text-lg md:text-xl font-semibold tracking-tight text-black dark:text-white">
					User Form Handling
				</h3>
				<p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md">
					Demonstrating type-safe validation, controlled form state, and async
					submission with error handling using a mock API.
				</p>
			</div>

			<div className="mt-12">
				<PracticeExampleCard
					codeblock={
						<Tabs className="w-full" variant="secondary">
							<Tabs.List
								aria-label="Form"
								className="w-fit *:h-8 *:w-fit *:px-4"
							>
								<Tabs.Tab className="gap-1.5" id="form">
									<Tabs.Icon />
									Form
								</Tabs.Tab>
								<Tabs.Tab className="gap-1.5" id="schema">
									<Tabs.Icon />
									Schema
								</Tabs.Tab>
							</Tabs.List>
							<Tabs.Panel className="pt-4 px-0" id="form">
								<CodeBlock
									code={UserProfileSetupFormCode}
									filename="UserProfileSetupForm.jsx"
									language="jsx"
								/>
							</Tabs.Panel>
							<Tabs.Panel className="pt-4 px-0" id="schema">
								<CodeBlock
									code={userProfileSchemaCode}
									filename="userProfileSchema.ts"
									language="ts"
								/>
							</Tabs.Panel>
						</Tabs>
					}
					preview={<UserProfileSetupForm />}
				/>
			</div>
		</div>
	);
};
