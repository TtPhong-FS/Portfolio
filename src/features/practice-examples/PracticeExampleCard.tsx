import { Icon, Tabs } from "@ttpfs/ui-react";
import type React from "react";

interface Props {
	preview: React.ReactNode;
	codeblock: React.ReactNode;
}

export const PracticeExampleCard: React.FC<Props> = (props) => {
	const { codeblock, preview } = props;
	return (
		<Tabs className="w-full">
			<Tabs.List aria-label="preview" className="w-fit *:h-8 *:w-fit *:px-4">
				<Tabs.Tab className="gap-1.5" id="preview">
					<Tabs.Icon />
					<Icon name="eye" />
					Preview
				</Tabs.Tab>
				<Tabs.Tab className="gap-1.5" id="code">
					<Tabs.Icon />
					<Icon name="terminal" />
					Code
				</Tabs.Tab>
			</Tabs.List>
			<Tabs.Panel className="pt-4" id="preview">
				{preview}
			</Tabs.Panel>
			<Tabs.Panel className="pt-4" id="code">
				<div className="w-full">{codeblock}</div>
			</Tabs.Panel>
		</Tabs>
	);
};
