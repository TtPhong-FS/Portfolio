import { Icon } from "@ttpfs/ui-react";
import type React from "react";
import { ButtonMagic, Spotlight, TextGenerateEffect } from "../ui";

export const Hero: React.FC = () => {
	return (
		<section id="home">
			<div className="relative flex h-[45rem] overflow-hidden lg:h-[55rem] w-full rounded-md antialiased md:items-center md:justify-center">
				<Spotlight className="-top-60 left-1/5 text-neutral-100 dark:text-neutral-50" />

				<div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-24 flex flex-col items-center text-center">
					<p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400">
						Tran Thanh Phong · Hanoi, Vietnam
					</p>

					<TextGenerateEffect
						className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-black dark:text-white"
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
			</div>
		</section>
	);
};
