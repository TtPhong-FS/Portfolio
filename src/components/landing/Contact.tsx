import { ContactForm } from "@/features/contact";
import { Icon } from "@ttpfs/ui-react";

export const Contact = () => {
	return (
		<section className="py-10 md:py-20 bg-white dark:bg-black" id="contact">
			<div className="text-center mb-16 md:mb-20">
				<div className="grid mb-6">
					<span className="mb-2 block font-medium text-center text-lg">
						Get in touch
					</span>
					<h4 className="text-3xl md:text-4xl text-center font-semibold">
						Connection <span className="text-purple-400">with me</span>
					</h4>
				</div>
				<p className="text-sm text-neutral-700 dark:text-neutral-300 md:text-base text-center">
					Have a good day! If you have any questions, comments, or feedback,
					please use the form below.
				</p>
				<ul className="grid gap-1 mt-4 place-items-center">
					<li className="flex items-center gap-2">
						<Icon
							className="fill-neutral-500 dark:fill-neutral-400"
							name="mail"
						/>
						<span className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
							nam71441@gmail.com
						</span>
					</li>
					<li className="flex items-center gap-2">
						<Icon
							className="fill-neutral-500 dark:fill-neutral-400"
							name="phone"
						/>
						<span className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
							0393150468
						</span>
					</li>
				</ul>
			</div>
			<div className="max-w-4xl mx-auto w-full">
				<ContactForm />
			</div>
		</section>
	);
};
