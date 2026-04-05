import { ContactForm } from "@/features/contact";
import { Spotlight } from "../ui";

export const Contact = () => {
	return (
		<section
			className="px-4 scroll-mt-20 md:scroll-mt-24 relative max-w-7xl rounded-lg mx-auto w-full md:px-8 py-6 md:py-12 my-20 md:my-40 bg-neutral-50 dark:bg-neutral-950"
			id="contact"
		>
			<Spotlight className="-top-20 text-blue-600 right-0 translate-x-10/12 opacity-60" />
			<div className="mb-16">
				<div className="text-center mb-2">
					<span className="mb-2 block font-medium text-neutral-600 dark:text-neutral-300 text-center text-sm md:text-lg">
						Connect with me
					</span>
					<h4 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-800 dark:from-neutral-100 dark:to-neutral-500">
						Get in touch
					</h4>
				</div>
				<p className="text-sm text-neutral-500 dark:text-neutral-400 md:text-base text-center">
					Have a good day! If you have any questions, comments, or feedback,
					please use the form below.
				</p>
			</div>
			<div className="max-w-4xl mx-auto w-full">
				<ContactForm />
			</div>
		</section>
	);
};
