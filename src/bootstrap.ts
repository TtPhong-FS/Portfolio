import { type IconDefinition, registerIcons } from "@ttpfs/ui-react";

declare module "@ttpfs/ui-react" {
	interface IconRegistry {
		github: IconDefinition;
		facebook: IconDefinition;
		code: IconDefinition;
		graduation: IconDefinition;
		project: IconDefinition;
		"spring-boot": IconDefinition;
		reactjs: IconDefinition;
		tailwindcss: IconDefinition;
		vscode: IconDefinition;
		git: IconDefinition;
		intellijIdea: IconDefinition;
		redux: IconDefinition;
		navigation: IconDefinition;
	}
}

registerIcons({
	code: {
		outline: "icon-[lucide--code-xml]",
	},
	facebook: {
		color: "icon-[logos--facebook]",
	},
	git: {
		color: "icon-[logos--git-icon]",
	},
	github: {
		outline: "icon-[bi--github]",
	},
	graduation: {
		outline: "icon-[lucide--graduation-cap]",
	},
	intellijIdea: {
		color: "icon-[logos--intellij-idea]",
	},
	navigation: {
		outline: "icon-[lucide--navigation]",
	},
	project: {
		outline: "icon-[lucide--briefcase-business]",
	},
	reactjs: {
		color: "icon-[logos--react]",
	},
	redux: {
		color: "icon-[logos--redux]",
	},
	"spring-boot": {
		color: "icon-[logos--spring-icon]",
	},
	tailwindcss: {
		color: "icon-[logos--tailwindcss-icon]",
	},
	vscode: {
		color: "icon-[logos--visual-studio-code]",
	},
});
