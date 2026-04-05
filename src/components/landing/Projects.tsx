import { Card, Chip, Icon } from "@ttpfs/ui-react";
import type React from "react";
import { SectionContainer } from "../SectionContainer";

export type ProjectType = "frontend" | "backend" | "fullstack";

interface Project {
	title: string;
	description: string;
	type: ProjectType;
	image?: string;
	highlights: string[];
	tech: string[];
	demoUrl?: string;
	repoUrl?: string;
}

interface ProjectCardProps {
	project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const {
		title,
		description,
		image,
		type,
		highlights,
		tech,
		demoUrl,
		repoUrl,
	} = project;

	return (
		<Card className="group transition hover:shadow-lg">
			{/* Thumbnail */}
			<div className="rounded-2xl border-0 relative bg-neutral-100 dark:bg-neutral-900">
				{image ? (
					<img
						alt={title}
						className="w-full h-full object-cover rounded-2xl"
						src={image}
					/>
				) : (
					<div className="aspect-video flex items-center justify-center bg-gradient-to-br border-0 rounded-2xl from-purple-400 to-blue-800 text-white">
						{title}
					</div>
				)}
				<Chip
					className="absolute rounded-none rounded-bl-xl! rounded-tr-xl top-0 right-0"
					color="default"
					variant="primary"
				>
					{type}
				</Chip>
			</div>

			<Card.Header>
				<Card.Title>{title}</Card.Title>
				<Card.Description className="line-clamp-3" title={description}>
					{description}
				</Card.Description>
			</Card.Header>

			<Card.Content className="space-y-3">
				<ul className="list-disc ml-4 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
					{highlights.map((item, idx) => (
						<li key={idx}>{item}</li>
					))}
				</ul>

				{/* Tech */}
				<div className="flex flex-wrap gap-2">
					{tech.map((t) => (
						<Chip key={t}>{t}</Chip>
					))}
				</div>

				{/* Actions */}
				<Card.Footer className="justify-end mt-auto">
					{demoUrl && (
						<a className="link" href={demoUrl} rel="noreferrer" target="_blank">
							Demo
						</a>
					)}
					{repoUrl && (
						<a className="link" href={repoUrl} rel="noreferrer" target="_blank">
							<Icon className="mr-2" name="github" variant="outline" /> GitHub
						</a>
					)}
				</Card.Footer>
			</Card.Content>
		</Card>
	);
};

export const Projects: React.FC = () => {
	return (
		<SectionContainer aria-labelledby="projects-heading" id="projects">
			<div className="mb-16 text-center">
				<h2
					className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-900 dark:from-neutral-50 dark:to-neutral-500"
					id="projects-heading"
				>
					Personal Projects
				</h2>
				<p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
					Exploring reusable UI systems, custom query DSLs, and scalable
					frontend architecture.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
				<ProjectCard
					project={{
						description:
							"Java library that converts RSQL query strings into jOOQ Condition in a type-safe and controlled manner, allowing future extensions to other DSLs such as JPA Criteria or QueryDSL and ensure only allowed fields and operators are executed through whitelist-based approach.",
						highlights: [
							"Type-safe filtering with jOOQ",
							"Whitelist-based security via FieldMeta",
							"DSL-agnostic, easily extensible to other DSLs",
							"Modular architecture (core / adapter separation)",
							"Clear mapping between API and persistence layers",
							"Standardized error handling for API integration",
							"Extensible operator system (registry-based)",
						],
						repoUrl: "https://github.com/ttpfs/rsql-core",
						tech: ["Java", "RSQL Parser", "JOOQ"],
						title: "RSQL Parser Adapter",
						type: "backend",
					}}
				/>
				<ProjectCard
					project={{
						description:
							"A UI component library built on top of HeroUI, providing simplified and ergonomic APIs over complex compound components. It standardizes common patterns (Drawer, Modal, AlertDialog, Popover) and includes a theme system powered by next-themes using class-based switching. The library also introduces a type-safe icon system with registry support via Iconify.",
						highlights: [
							"Simplified APIs over HeroUI compound components (Drawer, Modal, AlertDialog, Popover)",
							"Consistent, ergonomic component interface design",
							"ThemeSwitcher powered by next-themes (class-based theming)",
							"Icon system with registry-based extension (Iconify integration)",
							"~100 prebuilt common icons out of the box",
							"Type-safe icon usage via IconDefinition (variant-based)",
							"Extensible and reusable UI foundation for React applications",
						],
						repoUrl:
							"https://github.com/ttpfs/frontend-kit/tree/main/packages/ui#ttpfsui-react",
						tech: [
							"React",
							"HeroUI",
							"TailwindCss v4",
							"Next-themes",
							"React-medium-image-zoom",
							"@iconify/tailwind4",
						],
						title: "UI React",
						type: "frontend",
					}}
				/>

				<ProjectCard
					project={{
						description:
							"A React form library built on top of react-hook-form and Zod, integrated with @ttpfs/ui-react and styled via HeroUI. It provides a composable, type-safe form system with prebuilt field components and a registry-based extension mechanism for custom fields.",
						highlights: [
							"Built on react-hook-form + Zod (type-safe validation)",
							"HeroUI-based UI with consistent design system",
							"~15 prebuilt fields (TextField, SelectField, RadioGroupField, TimeField, DateTimeField, …)",
							"Field registry for extensibility (register custom field types)",
							"Strong typing via FieldTypeMap augmentation",
							"Controlled/uncontrolled form support",
							"Clean integration with schema-driven validation",
							"Designed for scalable, reusable form architecture",
						],
						repoUrl:
							"https://github.com/ttpfs/frontend-kit/tree/main/packages/form#ttpfsform-react",
						tech: [
							"React",
							"React Hook Form",
							"Zod",
							"@internationalized/date",
							"@hookform/resolvers",
						],
						title: "Form React",
						type: "frontend",
					}}
				/>
				<ProjectCard
					project={{
						description:
							"A React Table component built by composing TanStack Table with HeroUI, delivering a flexible, headless data model with a polished UI layer. It focuses on extensibility via mixin-style composition while keeping state management explicit and predictable.",
						highlights: [
							"Infinity scroll support",
							"Column sorting (multi-sort supported)",
							"Column visibility toggle",
							"Row selection",
							"Pagination (controlled/uncontrolled)",
							"Persist column state to localStorage",
							"Row context via DataTableRowContext for per-row actions and state sharing",
						],
						repoUrl:
							"https://github.com/ttpfs/frontend-kit/tree/main/packages/table#ttpfstable-react",
						tech: ["React", "Tanstack Table"],
						title: "Table React",
						type: "frontend",
					}}
				/>
			</div>
		</SectionContainer>
	);
};
