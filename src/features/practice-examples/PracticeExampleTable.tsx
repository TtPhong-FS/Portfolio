import { CodeBlock } from "@/components";
import { Separator } from "@ttpfs/ui-react";
import type React from "react";
import { PracticeExampleCard } from "./PracticeExampleCard";
import {
	UserInfinityListDataTable,
	UserListDataTable,
	userInfinityListDataTableCodeblock,
	userListDataTableCodeblock,
} from "./table";

interface Props {}

export const PracticeExampleTable: React.FC<Props> = (props) => {
	const {} = props;
	return (
		<div>
			<div className="space-y-3 mb-8">
				<h3 className="text-lg md:text-xl font-semibold tracking-tight text-black dark:text-white">
					Data Table Management
				</h3>
				<p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md">
					Implementing sorting, filtering, and pagination with controlled state
					and efficient data rendering.
				</p>
			</div>

			<div className="grid gap-4 md:gap-8">
				<h6 className="font-semibold">Basic Data Table of list users</h6>
				<PracticeExampleCard
					codeblock={
						<CodeBlock
							code={userListDataTableCodeblock}
							filename="UserListDataTable.tsx"
							language="tsx"
						/>
					}
					preview={<UserListDataTable />}
				/>
			</div>

			<Separator className="my-8" />

			<div className=" grid gap-4 md:gap-8">
				<h6 className="font-semibold">Infinity Data Table of list users</h6>
				<PracticeExampleCard
					codeblock={
						<CodeBlock
							code={userInfinityListDataTableCodeblock}
							filename="UserInfinityListDataTable.tsx"
							language="tsx"
						/>
					}
					preview={
						<div className="max-h-124">
							<UserInfinityListDataTable />
						</div>
					}
				/>
			</div>
		</div>
	);
};
