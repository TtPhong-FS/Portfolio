import { navigations } from "@/constants";
import {
	cn,
	Drawer,
	Icon,
	Separator,
	ThemeSwitcher,
	Tooltip,
} from "@ttpfs/ui-react";
import type React from "react";

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
						<div className="items-center gap-4 flex">
							<Tooltip>
								<Tooltip.Trigger>
									<a
										className="rounded-xl transition inline-flex"
										href="https://www.facebook.com/torischto01.smr"
										rel="noreferrer"
										target="_blank"
									>
										<Icon name="facebook" size="2xl" variant="color" />
									</a>
								</Tooltip.Trigger>
								<Tooltip.Content>Follow Me on Facebook</Tooltip.Content>
							</Tooltip>
							<Tooltip>
								<Tooltip.Trigger>
									<a
										className="rounded-xl transition inline-flex"
										href="https://github.com/TtPhong-FS"
										rel="noreferrer"
										target="_blank"
									>
										<Icon
											className="dark:fill-white"
											name="github"
											size="2xl"
											variant="outline"
										/>
									</a>
								</Tooltip.Trigger>
								<Tooltip.Content>Go to GitHub Profile</Tooltip.Content>
							</Tooltip>
						</div>
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
