import { ContactForm } from "@/features/contact";
import { SectionContainer } from "../SectionContainer";

export const Contact = () => {
	return (
		<SectionContainer id="contact">
			<div className="mb-16">
				<div className="text-center mb-2">
					<span className="mb-2 block font-medium text-neutral-600 dark:text-neutral-300 text-center text-base md:text-lg">
						Connect with me
					</span>
					<h4 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-900 dark:from-neutral-50 dark:to-neutral-500">
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
		</SectionContainer>
	);
};
