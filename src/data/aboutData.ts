import { type TypedIconName } from "@ttpfs/ui-react";

interface About {
	description: string;
	skills: {
		key: string;
		title: string;
		description: string;
		icon: TypedIconName;
	}[];
	toolsAndTechnicals: {
		id: string;
		section: string;
		title: string;
		icons: TypedIconName[];
	}[];
}

export const about: About = {
	description:
		"As a recent IT graduate, I have a solid foundation in HTML, CSS, JavaScript, and hands-on experience building user interfaces using React.js. I enjoy creating responsive, cross-device web experiences and am a quick learner of new technologies in frontend development.",
	skills: [
		{
			description: "HTML, CSS, SCSS, Tailwind CSS",
			icon: "global",
			key: "basic",
			title: "Basic",
		},
		{
			description: "Java, JavaScript",
			icon: "code",
			key: "language",
			title: "Language",
		},
		{
			description: "Information techlonogy",
			icon: "graduation",
			key: "education",
			title: "Education",
		},
		{
			description: "Built 1 projects",
			icon: "project",
			key: "projects",
			title: "Projects",
		},
	],
	toolsAndTechnicals: [
		{
			icons: ["spring-boot", "reactjs", "redux", "tailwindcss"],
			id: "technicals",
			section: "#technicals",
			title: "Technicals i use",
		},
		{
			icons: ["vscode", "git", "intellijIdea"],
			id: "tools",
			section: "#tools",
			title: "Tools i use",
		},
	],
};
