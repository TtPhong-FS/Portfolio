import { footerData } from "@/data/footerData";
import { Link } from "@tanstack/react-router";
import { Icon, Separator } from "@ttpfs/ui-react";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer
			className="py-6 bg-white dark:bg-neutral-900 sticky z-20 md:py-8 px-4 md:px-8"
			id="footer"
		>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3 place-items-start">
				<div>
					<h3 className="flex mb-2 items-center gap-2">
						<Icon name="code" size="xl" />
						<span className="text-xl md:text-2xl font-bold text-black dark:text-white ">
							{footerData.brand.name}
						</span>
					</h3>
					<p className="text-sm text-neutral-500 max-w-2xl dark:text-neutral-400">
						{footerData.brand.description}
					</p>
				</div>

				<div className="md:mx-auto">
					<h4 className="flex text-left text-black dark:text-white text-lg font-semibold mb-2">
						Navigation
					</h4>
					<ul className="flex flex-col gap-2 text-sm">
						{footerData.navigations.map((item, index) => (
							<li key={index}>
								<Link
									className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white text-sm"
									to={item.link}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="flex items-center ml-auto gap-2">
					<a
						className="hidden rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)] sm:inline-flex"
						href="https://www.facebook.com/torischto01.smr"
						rel="noreferrer"
						target="_blank"
					>
						<span className="sr-only">Follow Me on Facebook</span>
						<Icon name="facebook" size="2xl" variant="color" />
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
							size="2xl"
							variant="color"
						/>
					</a>
				</div>
			</div>
			<Separator className="my-8" />
			<h3 className="text-sm text-center text-gray-800 dark:text-gray-300">
				&copy; {new Date().getFullYear()} TtPhongdev. All right reserved
			</h3>
		</footer>
	);
}
