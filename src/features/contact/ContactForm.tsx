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
			<Grid className="gap-6">
				<Grid className="grid grid-cols-2 gap-6">
					<form.TextField
						className={{
							group: "h-11",
						}}
						control={form.control}
						label="Your Name"
						name="name"
					/>
					<form.TextField
						className={{
							group: "h-11",
						}}
						control={form.control}
						label="Email"
						name="email"
					/>
				</Grid>
				<form.TextAreaField control={form.control} label="Note" name="note" />
			</Grid>
			<div className="place-items-center mt-6 w-full grid">
				<ButtonMagic
					icon={<Icon name="navigation" />}
					position="right"
					title="Contact now"
					type="submit"
				/>
			</div>
		</FormProvider>
	);
};
