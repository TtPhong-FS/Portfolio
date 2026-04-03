import { Link } from "@tanstack/react-router";
import { Icon, ThemeSwitcher } from "@ttpfs/ui-react";

export function Header() {
	return (
		<header className="header backdrop-blur-lg">
			<nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4">
				<h2 className="m-0 flex-shrink-0 text-base font-semibold tracking-tight">
					<Link className="button button--primary font-semibold" to="/">
						<span className="h-2 w-2 rounded-full bg-white" />
						TtPhong.dev
					</Link>
				</h2>

				<div className="ml-auto flex items-center gap-1.5 sm:ml-0 sm:gap-2">
					<a
						className="hidden rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)] sm:inline-flex"
						href="https://www.facebook.com/torischto01.smr"
						rel="noreferrer"
						target="_blank"
					>
						<span className="sr-only">Follow Me on Facebook</span>
						<Icon name="facebook" size="xl" variant="color" />
					</a>
					<a
						className="hidden rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)] sm:inline-flex"
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

				<div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-2 sm:w-auto sm:flex-nowrap sm:pb-0">
					<Link activeProps={{ className: "nav-link is-active" }} to="/">
						Home
					</Link>
					<Link activeProps={{ className: "nav-link is-active" }} to="/about">
						About
					</Link>
				</div>
			</nav>
		</header>
	);
}
