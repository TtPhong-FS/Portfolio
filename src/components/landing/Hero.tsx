import { heroData } from "@/data/heroData";
import { cn, Icon } from "@ttpfs/ui-react";
import type React from "react";
import { ButtonMagic, Spotlight, TextGenerateEffect } from "../ui";

export const Hero: React.FC = () => {
	return (
		<section id="home">
			<div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-white/[0.96] dark:bg-black/[0.96] antialiased md:items-center md:justify-center">
				<div
					className={cn(
						"pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
						"[background-image:linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
					)}
				/>

				<Spotlight
					className="-top-40 left-0 md:-top-20 md:left-60"
					fill="white"
				/>
				<Spotlight
					className="top-10 left-full h-[80vh] w-[50vw]"
					fill="purple"
				/>
				<Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

				<div className="relative z-10 mx-auto w-full max-w-6xl p-4 pt-20 md:pt-0 flex flex-col items-center justify-center">
					<h4 className="tracking-tighter text-sm md:text-base text-center text-neutral-800 dark:text-neutral-50">
						{heroData.iam}
					</h4>
					<TextGenerateEffect
						className="text-center text-lg md:text-2xl text-black dark:text-white"
						words={heroData.textGenerate}
					/>
					<p className="bg-opacity-50 mt-6 mb-8 bg-gradient-to-b from-neutral-500 to-neutral-800 dark:from-neutral-50 dark:to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-6xl">
						I am <span className="text-purple"> frontend devloper</span> from
						Hanoi, Vietnam.
					</p>
					<a href="#projects">
						<ButtonMagic
							icon={<Icon name="navigation" />}
							position="right"
							title="Show my projects"
						/>
					</a>
				</div>
			</div>
		</section>
	);
};
