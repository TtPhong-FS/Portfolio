import { type IconDefinition, registerIcons } from "@ttpfs/ui-react";

declare module "@ttpfs/ui-react" {
	interface IconRegistry {
		github: IconDefinition;
		facebook: IconDefinition;
	}
}

registerIcons({
	facebook: {
		color: "icon-[logos--facebook]",
	},
	github: {
		outline: "icon-[bi--github]",
	},
});
