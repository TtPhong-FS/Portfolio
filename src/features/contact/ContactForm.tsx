import { ButtonMagic } from "@/components";
import { FormProvider, useForm, useFormSubmit } from "@ttpfs/form-react";
import { Grid, Icon } from "@ttpfs/ui-react";
import type React from "react";
import { contactDefaultValues, contactSchema } from "./contactSchema";

interface Props {}

export const ContactForm: React.FC<Props> = (props) => {
	const {} = props;

	const form = useForm({
		options: {
			defaultValues: contactDefaultValues,
		},
		schema: contactSchema,
	});

	const { handleSubmit } = useFormSubmit(form, {
		onValid: (values) => console.log(values),
	});

	return (
		<FormProvider form={form} onSubmit={handleSubmit}>
			<Grid className="gap-4 md:gap-6">
				<Grid className="grid gap-4 grid-cols-1 md:grid-cols-2 md:gap-6">
					<form.TextField
						className={{
							group: "h-12",
							input: "text-sm",
						}}
						control={form.control}
						label="Your Name"
						name="name"
						placeholder="John Brain"
						required
						type="text"
					/>
					<form.TextField
						className={{
							group: "h-12",
							input: "text-sm",
						}}
						control={form.control}
						label="Email"
						name="email"
						placeholder="yourmail@gmail.com"
						required
						type="email"
					/>
				</Grid>
				<form.TextAreaField
					className={{
						input: "text-sm",
					}}
					control={form.control}
					label="Note"
					name="note"
					placeholder="Your note here for me..."
				/>
			</Grid>
			<div className="place-items-center mt-6 w-full grid">
				<ButtonMagic
					className="h-14! md:h-12!"
					type="submit"
					variant="border-magic"
				>
					<Icon name="navigation" />
					Contact now
				</ButtonMagic>
			</div>
		</FormProvider>
	);
};
