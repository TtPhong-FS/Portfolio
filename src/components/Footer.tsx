import { navigations } from "@/constants";
import { Icon, Separator } from "@ttpfs/ui-react";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer
			className="py-6 bg-gray-50 dark:bg-neutral-900 sticky z-20 md:py-8 px-4 md:px-8"
			id="footer"
		>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3 place-items-start">
				<div>
					<h3 className="flex mb-2 items-center gap-2">
						<Icon name="code" size="xl" />
						<span className="text-lg md:text-xl font-bold text-black dark:text-white ">
							Tran Thanh Phong
						</span>
					</h3>
					<p className="text-sm text-neutral-500 max-w-2xl dark:text-neutral-400">
						Frontend Developer specializing in UI/UX, modern web technologies,
						and building smooth digital experiences with clean code & creative
						flow.
					</p>
				</div>

				<div className="md:mx-auto">
					<h4 className="flex text-left text-black dark:text-white text-base md:text-lg font-semibold mb-2">
						Navigation
					</h4>
					<ul className="flex flex-col gap-2 text-sm">
						{navigations.map((item) => (
							<a
								className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white text-sm"
								href={item.link}
								key={item.key}
							>
								{item.name}
							</a>
						))}
					</ul>
				</div>
				{/* <div className="flex items-center ml-auto gap-3">
					<a
						className="hidden rounded-xl text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)] sm:inline-flex"
						href="https://www.facebook.com/torischto01.smr"
						rel="noreferrer"
						target="_blank"
					>
						<span className="sr-only">Follow Me on Facebook</span>
						<Icon name="facebook" size="2xl" variant="color" />
					</a>
					<a
						className="hidden rounded-xl text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)] sm:inline-flex"
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
				</div> */}
				<div className="md:ml-auto">
					<h6 className="text-neutral-500 text-sm mb-0.5 dark:text-neutral-300">
						Contact me through:
					</h6>
					<ul className="grid gap-1place-items-center">
						<a
							className="flex items-center w-fit py-0.5 hover:underline gap-2"
							href="mailto:nam71441@gmail.com"
						>
							<Icon
								className="text-neutral-500 dark:text-neutral-400"
								name="mail"
							/>
							<span className="text-sm text-neutral-500 dark:text-neutral-400">
								nam71441@gmail.com
							</span>
						</a>
						<a
							className="flex items-center w-fit py-0.5 hover:underline gap-2"
							href="tel:+84393150468"
						>
							<Icon
								className="text-neutral-500 dark:text-neutral-400"
								name="phone"
							/>
							<span className="text-sm text-neutral-500 dark:text-neutral-400">
								0393150468
							</span>
						</a>
					</ul>
				</div>
			</div>
			<Separator className="my-8" />
			<h3 className="text-xs md:text-sm text-center text-gray-800 dark:text-gray-300">
				&copy; {year} TtPhongdev. All right reserved
			</h3>
		</footer>
	);
}
