import { type TimelineItem } from "@/types";
import { Icon } from "@ttpfs/ui-react";
import { Timeline, TypewriterEffect } from "./ui";

export const GraduationTimeline = () => {
	const data: TimelineItem[] = [
		{
			content: (
				<div>
					<p className="mb-8 text-sm tracking-tight font-normal text-neutral-800 md:text-base dark:text-neutral-200">
						Built internal reusable frontend libraries based on
						<b> HeroUI</b>, <b> React Hook Form</b>, and <b> TanStack Table</b>,
						focusing on standardization and scalability across projects for
						frontend.
					</p>
					<p className="mb-8 text-sm tracking-tight font-normal text-neutral-800 md:text-base dark:text-neutral-200">
						On the backend side, developed an <b> RSQL parser </b> with a query
						DSL inspired by <b> jOOQ to support </b> flexible and
						<b> expressive querying </b>.
					</p>
					<div className="grid grid-cols-2 gap-4">
						<img
							alt="startup template"
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
							height={500}
							src="https://assets.aceternity.com/templates/startup-1.webp"
							width={500}
						/>
						<img
							alt="startup template"
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
							height={500}
							src="https://assets.aceternity.com/templates/startup-2.webp"
							width={500}
						/>
						<img
							alt="startup template"
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
							height={500}
							src="https://assets.aceternity.com/templates/startup-3.webp"
							width={500}
						/>
						<img
							alt="startup template"
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
							height={500}
							src="https://assets.aceternity.com/templates/startup-4.webp"
							width={500}
						/>
					</div>
				</div>
			),
			timeline: "2026",
		},
		{
			content: (
				<div>
					<p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
						Joined{" "}
						<b>
							<span className="text-red-600">IZONE</span> (IELTS Chiến Lược)
						</b>{" "}
						as a <b>Frontend Developer</b> after graduation, working on
						production systems and <b>gaining real-world</b> development
						experience.
					</p>
					<div className="grid grid-cols-2 gap-4">
						<img
							alt="hero template"
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
							height={500}
							src="https://assets.aceternity.com/pro/hero-sections.png"
							width={500}
						/>
						<img
							alt="feature template"
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
							height={500}
							src="https://assets.aceternity.com/features-section.png"
							width={500}
						/>
						<img
							alt="bento template"
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
							height={500}
							src="https://assets.aceternity.com/pro/bento-grids.png"
							width={500}
						/>
						<img
							alt="cards template"
							className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
							height={500}
							src="https://assets.aceternity.com/cards.png"
							width={500}
						/>
					</div>
				</div>
			),
			timeline: "2025",
		},
		{
			content: (
				<div>
					<p className="mb-4 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
						Studied Information Technology at Hanoi Polytechnic College.
					</p>
					<div className="mb-8 space-y-2">
						<div className="flex items-start gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
							<Icon name="bookmark-check" />
							<span>
								Maintained a<b> GPA of 3.8</b>
							</span>
						</div>
						<div className="flex items-start gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
							<Icon name="bookmark-check" />
							<span>
								with strong interest in Database Systems and Web Development
							</span>
						</div>
						<div className="flex items-start gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
							<Icon name="bookmark-check" />
							<span>
								Completed a graduation project as part of the final academic
								requirement
							</span>
						</div>
					</div>
				</div>
			),
			timeline: "2024 & Earlier",
		},
	];

	return (
		<div className="relative w-full overflow-clip rounded-2xl font-sans">
			<div className="max-w-7xl mx-auto">
				<TypewriterEffect
					className="md:text-3xl lg:text-4xl text-neutral-700 dark:text-neutral-200 text-left text-2xl"
					words={words}
				/>
				<div className="flex mt-4 flex-col gap-4 md:gap-8 lg:flex-row w-full">
					<p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base lg:text-lg max-w-xl">
						I &apos;ve been on my journey for the past few years. I spent 3.5
						years in college, maintaining a GPA of 3.8, and have recently gained
						8 months of hands-on industry experience. Here&apos;s a timeline of
						my progress.
					</p>

					<div className="w-full ml-auto shrink-0 sm:w-80 rounded-3xl max-w-none">
						<img
							alt="TtPhong.dev"
							className="w-full rounded-3xl"
							src={"/me.jpg"}
						/>
					</div>
				</div>
			</div>
			<Timeline data={data} />
		</div>
	);
};

const words = [
	{
		text: "Graduation",
	},
	{
		text: "&",
	},
	{
		text: "Career",
	},
	{
		text: "Path",
	},
	{
		className: "text-blue-500 dark:text-blue-500",
		text: "timeline",
	},
];
