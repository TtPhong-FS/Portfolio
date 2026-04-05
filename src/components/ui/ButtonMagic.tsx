import { cn } from "@ttpfs/ui-react";
import type React from "react";

type BaseButtonProps = {
	type?: "submit" | "button";
	className?: string;
	children?: React.ReactNode;
};

type ButtonMagicVariantProps = BaseButtonProps & {
	variant: "border-magic";
};

type ButtonSketchProps = BaseButtonProps & {
	variant: "sketch";
};

type ButtonProps = ButtonMagicVariantProps | ButtonSketchProps;

export function ButtonMagic(props: ButtonProps) {
	const { variant, className, children, type } = props;

	const renderButton = () => {
		switch (variant) {
			case "border-magic":
				return (
					<button
						className={cn(
							"relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none w-full md:w-52",
							className,
						)}
						type={type}
					>
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white dark:bg-slate-950 px-6 gap-2 text-sm font-medium text-black-default dark:text-white backdrop-blur-3xl">
							{children}
						</span>
					</button>
				);
			case "sketch":
				return (
					<button
						className={cn(
							"px-4 py-2 rounded-md cursor-pointer border w-full border-black md:w-52 bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200",
							className,
						)}
						type={type}
					>
						{children}
					</button>
				);
		}
	};

	return renderButton();
}
