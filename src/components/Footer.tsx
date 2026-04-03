import { Icon } from "@ttpfs/ui-react";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="px-4 pb-14 pt-10 text-[var(--sea-ink-soft)] bg-gray-50 dark:bg-neutral-900">
			<div className="flex w-full">
				<div className="page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
					<p className="m-0 text-sm">
						&copy; {year} TtPhongFs. All rights reserved.
					</p>
				</div>
				<div className="flex items-center ml-auto gap-4">
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
		</footer>
	);
}
