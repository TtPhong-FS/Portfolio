import { navigations, sectionIds } from "@/constants";
import { useObserverSection } from "@/hooks";
import { Link } from "@tanstack/react-router";
import { cn, ThemeSwitcher } from "@ttpfs/ui-react";
import { HeaderMenu } from "./HeaderMenu";
import { Social } from "./Social";

export function Header() {
	const sectionId = useObserverSection(sectionIds);

	return (
		<header className="w-full backdrop-blur-md">
			<div className="flex h-16 items-center justify-between px-4 sm:h-20 md:px-8">
				<Link to="/">
					<h1 className="block text-center text-md md:text-lg text-black-default dark:text-white font-bold">
						TtPhong.dev
					</h1>
				</Link>

				<nav className="hidden lg:flex">
					<ul className="flex h-full items-center shadow-md bg-neutral-50 dark:bg-neutral-900 p-2 rounded-2xl">
						{navigations.map((item) => {
							const isActive = item.key === sectionId;
							return (
								<Link
									className={cn(
										"px-6 py-2.5 rounded-3xl",
										isActive
											? "dark:bg-white/10 bg-black/5 text-black dark:text-white font-medium"
											: "",
									)}
									id={item.link}
									key={item.key}
									to={item.link}
								>
									{item.name}
								</Link>
							);
						})}
					</ul>
				</nav>
				<div className="items-center hidden md:gap-4 lg:gap-5 md:flex">
					<div className="hidden md:block">
						<Social />
					</div>
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
