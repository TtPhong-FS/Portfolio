import { cn } from "@ttpfs/ui-react";
import type React from "react";
import { type PropsWithChildren } from "react";

interface Props extends PropsWithChildren, React.HTMLAttributes<HTMLElement> {
	id: string;
	className?: string;
}

export const SectionContainer: React.FC<Props> = (props) => {
	const { children, id, className, ...rest } = props;
	return (
		<section
			className={cn(
				className,
				"relative z-20 w-full max-w-7xl my-20 md:my-32 lg:my-40 px-4 sm:px-6 lg:px-8 mx-auto",
			)}
			id={id}
			{...rest}
		>
			{children}
		</section>
	);
};
