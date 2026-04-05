import { navigations } from "@/constants";
import { cn, Drawer, Icon, Separator, ThemeSwitcher } from "@ttpfs/ui-react";
import type React from "react";
import { Social } from "./Social";

interface Props {}

export const HeaderMenu: React.FC<Props> = (props) => {
	const {} = props;
	return (
		<Drawer
			body={
				<>
					<div className="pt-4 pb-2">
						<div className="text-xs dark:text-neutral-100 text-neutral-900 uppercase tracking-wide">
							Explore
						</div>
					</div>
					<Separator className="my-2" />
					<nav>
						<ul className="flex flex-col h-full items-start">
							{navigations.map((item) => {
								return (
									<a
										className={cn("py-1.5")}
										href={item.link}
										id={item.link}
										key={item.key}
									>
										{item.name}
									</a>
								);
							})}
						</ul>
					</nav>
				</>
			}
			description="Fullstack engineer focused on building and delivering end-to-end product features."
			footer={
				<div className="grid w-full gap-4">
					<Separator />
					<div className="flex justify-between items-center w-full">
						<Social />
						<ThemeSwitcher
							className={{
								root: "h-10 w-10",
								skeleton: "rounded-lg",
							}}
							variant="ghost"
						/>
					</div>
				</div>
			}
			title="Menu"
			trigger={<Icon name="menu" size="lg" />}
		/>
	);
};
