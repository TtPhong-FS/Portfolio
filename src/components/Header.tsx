import { navigations } from "@/constants";
import { Link, useLocation } from "@tanstack/react-router";
import { cn, Icon, ThemeSwitcher, Tooltip } from "@ttpfs/ui-react";
import { useEffect, useState } from "react";
import { HeaderMenu } from "./HeaderMenu";

export function Header() {
	const [activeId, setActiveId] = useState<string | null>(null);

	const location = useLocation();

	useEffect(() => {
		const id = location.hash?.replace("#", "") ?? "";

		if (id) {
			setActiveId(id);
		} else {
			setActiveId("home");
		}
	}, [location.hash]);

	return (
		<header className="w-full backdrop-blur-md">
			<div className="flex h-16 items-center justify-between px-4 sm:h-20 md:px-8">
				<Link to="/">
					<h1 className="block text-center text-md md:text-lg text-black-default dark:text-white font-bold">
						TtPhong.dev
					</h1>
				</Link>

				<nav className="hidden md:flex">
					<ul className="flex h-full items-center shadow-md bg-neutral-50 dark:bg-neutral-900 p-2 rounded-2xl">
						{navigations.map((item) => {
							const isActive = item.key === activeId;
							return (
								<a
									className={cn(
										"px-6 py-2.5 rounded-3xl",
										isActive
											? "dark:bg-white/10 bg-black/5 text-black dark:text-white font-medium"
											: "",
									)}
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
				<div className="items-center hidden md:gap-2 md:flex">
					<Tooltip>
						<Tooltip.Trigger>
							<a
								className="rounded-xl p-2 transition inline-flex"
								href="https://www.facebook.com/torischto01.smr"
								rel="noreferrer"
								target="_blank"
							>
								<Icon name="facebook" size="xl" variant="color" />
							</a>
						</Tooltip.Trigger>
						<Tooltip.Content>Follow Me on Facebook</Tooltip.Content>
					</Tooltip>
					<Tooltip>
						<Tooltip.Trigger>
							<a
								className="rounded-xl p-2 transition inline-flex"
								href="https://github.com/TtPhong-FS"
								rel="noreferrer"
								target="_blank"
							>
								<Icon
									className="dark:fill-white"
									name="github"
									size="xl"
									variant="outline"
								/>
							</a>
						</Tooltip.Trigger>
						<Tooltip.Content>Go to GitHub Profile</Tooltip.Content>
					</Tooltip>
					<ThemeSwitcher
						className={{
							root: "h-10 w-10",
							skeleton: "rounded-lg",
						}}
						variant="ghost"
					/>
				</div>

				<div className="block md:hidden">
					<HeaderMenu />
				</div>
			</div>
		</header>
	);
}
