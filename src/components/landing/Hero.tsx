import { cn, Icon } from "@ttpfs/ui-react";
import type React from "react";
import { SectionContainer } from "../SectionContainer";
import { ButtonMagic, Spotlight, TextGenerateEffect } from "../ui";

export const Hero: React.FC = () => {
	return (
		<div className="relative">
			<div
				className={cn(
					"absolute inset-0",
					"[background-size:40px_40px]",
					"[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
					"dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
				)}
			/>
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

			<SectionContainer
				className="md:h-[35rem] relative flex items-center justify-center"
				id="home"
			>
				<Spotlight className="md:left-5 md:-top-70 lg:-top-60 lg:left-1/5 left-10 -top-40 text-neutral-100 dark:text-neutral-50" />

				<div className="z-10 flex flex-col items-center text-center">
					<p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400">
						Tran Thanh Phong · Hanoi, Vietnam
					</p>

					<TextGenerateEffect
						className="mt-3 text-4xl max-w-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black dark:text-white"
						words="Fullstack Engineer building end-to-end product features"
					/>

					<p className="mt-4 max-w-xl text-sm md:text-base text-neutral-600 dark:text-neutral-400">
						Specialized in React, TanStack, React hook form and design systems
						on the frontend. Java with Spring Boot and API design, System
						Architecture on the backend. Focused on performance and
						maintainability.
					</p>

					<div className="mt-8 max-w-md w-full flex-col md:flex-row flex justify-center gap-4 md:gap-8">
						<a className="flex-1" href="#projects">
							<ButtonMagic variant="border-magic">
								<Icon name="navigation" />
								View Projects
							</ButtonMagic>
						</a>

						<a className="flex-1" href="#contact">
							<ButtonMagic
								className="h-12 flex items-center justify-center gap-2"
								variant="sketch"
							>
								<Icon name="phone" />
								Contact
							</ButtonMagic>
						</a>
					</div>

					<div className="flex mt-4 text-sm text-neutral-500 dark:text-neutral-400 gap-1.5">
						<span>~1 năm kinh nghiệm</span>
						<span>·</span>
						<span>3+ projects</span>
					</div>
				</div>
			</SectionContainer>
		</div>
	);
};
