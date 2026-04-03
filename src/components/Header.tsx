import { Link } from "@tanstack/react-router";
import { cn, Icon, ThemeSwitcher } from "@ttpfs/ui-react";
import { useEffect, useState } from "react";

const navigations = [
	{
		key: "home",
		link: "#home",
		name: "Home",
	},
	{
		key: "about",
		link: "#about",
		name: "About me",
	},
	// {
	//   name: 'Services',
	//   link: '#services',
	//   icon: FaHandshake
	// },
	{
		key: "contact",
		link: "#contact",
		name: "Contact",
	},
	{
		key: "projects",
		link: "#projects",
		name: "Projects",
	},
];

export function Header() {
	const [activeId, setActiveId] = useState<string | null>(null);

	useEffect(() => {
		const sections = document.querySelectorAll("section[id]");

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries.find((e) => e.isIntersecting);
				if (visible) {
					setActiveId(visible.target.id);
				}
			},
			{
				rootMargin: "-50% 0px -50% 0px",
			},
		);

		sections.forEach((el) => {
			observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);
	return (
		<header className="sticky top-0 z-20 w-full backdrop-blur-md">
			<div className="flex h-16 items-center justify-between px-4 sm:h-20 md:px-8">
				<Link to="/">
					<h1 className="block text-center text-lg md:text-xl text-black-default dark:text-white font-bold">
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
				<div className="items-center md:gap-2 flex">
					<a
						className="hidden rounded-xl p-2 transition sm:inline-flex"
						href="https://www.facebook.com/torischto01.smr"
						rel="noreferrer"
						target="_blank"
					>
						<span className="sr-only">Follow Me on Facebook</span>
						<Icon name="facebook" size="xl" variant="color" />
					</a>
					<a
						className="hidden rounded-xl p-2 transition sm:inline-flex"
						href="https://github.com/TtPhong-FS"
						rel="noreferrer"
						target="_blank"
					>
						<span className="sr-only">Go to Portfolio GitHub</span>
						<Icon
							className="dark:fill-white"
							name="github"
							size="xl"
							variant="outline"
						/>
					</a>
					<ThemeSwitcher
						className={{
							root: "h-10 w-10",
							skeleton: "rounded-lg",
						}}
						variant="ghost"
					/>
				</div>
			</div>
		</header>
	);
}
