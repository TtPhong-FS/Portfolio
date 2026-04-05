import { cn } from "@ttpfs/ui-react";
import { motion, stagger, useAnimate } from "motion/react";
import { useEffect } from "react";

export const TextGenerateEffect = ({
	words,
	className,
	filter = true,
	duration = 0.5,
}: {
	words: string;
	className?: string;
	filter?: boolean;
	duration?: number;
}) => {
	const [scope, animate] = useAnimate();
	const wordsArray = words.split(" ");
	// biome-ignore lint/correctness/useExhaustiveDependencies: <>
	useEffect(() => {
		animate(
			"span",
			{
				filter: filter ? "blur(0px)" : "none",
				opacity: 1,
			},
			{
				delay: stagger(0.2),
				duration: duration ? duration : 1,
			},
		);
	}, [scope.current]);

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							className="dark:text-white text-black opacity-0"
							key={word + idx}
							style={{
								filter: filter ? "blur(10px)" : "none",
							}}
						>
							{word}{" "}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div
			className={cn(
				"font-bold dark:text-white text-black leading-snug tracking-wide",
				className,
			)}
		>
			{renderWords()}
		</div>
	);
};
