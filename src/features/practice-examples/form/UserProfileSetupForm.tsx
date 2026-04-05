import {
	FormProvider,
	FormSubmitButton,
	useForm,
	useFormSubmit,
} from "@ttpfs/form-react";
import {
	Button,
	Description,
	Fieldset,
	Grid,
	notification,
	Separator,
} from "@ttpfs/ui-react";
import type React from "react";
import { GenderOptions, RoleOptions, SkillOptions } from "./constants";
import {
	userProfileDefaultValues,
	userProfileSchema,
} from "./userProfileSchema";

export const UserProfileSetupForm: React.FC = () => {
	const form = useForm({
		options: {
			defaultValues: userProfileDefaultValues,
		},
		schema: userProfileSchema,
	});

	const { handleSubmit } = useFormSubmit(form, {
		onError: (error) => {
			notification.error(error?.message);
		},
		onSuccess: () => {
			notification.success("Setup profile successfully");
			form.reset();
		},
		onValid: async (values) => {
			console.log(values);
		},
	});

	return (
		<FormProvider form={form} onSubmit={handleSubmit}>
			<Fieldset>
				<Fieldset.Legend>Setup Profile</Fieldset.Legend>
				<Description>Setup your profile to get started.</Description>
				<Fieldset.Group>
					<Grid className="grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
						<form.TextField
							control={form.control}
							label="Full Name"
							name="fullName"
							placeholder="Trần Thanh Phong"
							required
						/>
						<form.TextField
							control={form.control}
							label="Phone (optional)"
							name="phone"
							placeholder="+84 393150468"
							type="tel"
						/>
					</Grid>
					<Grid className="grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
						<form.RadioGroupField
							control={form.control}
							label="Gender (optional)"
							name="gender"
							options={GenderOptions}
							orientation="vertical"
						/>
						<form.DateField
							control={form.control}
							label="Date of birth (optional)"
							name="dob"
						/>
					</Grid>
					<Separator />
					<form.TextField
						control={form.control}
						label="Email"
						name="email"
						placeholder="nam71441@gmail.com"
						required
						type="email"
					/>
					<Grid className="grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
						<form.TextField
							control={form.control}
							label="Password"
							name="password"
							placeholder="●●●●●●●●"
							required
							type="password"
						/>
						<form.TextField
							control={form.control}
							label="Password"
							name="confirmPassword"
							placeholder="●●●●●●●●"
							required
							type="password"
						/>
					</Grid>
					<Separator />
					<form.SelectField
						control={form.control}
						label="Role"
						name="role"
						options={RoleOptions}
						placeholder="Select your role in company"
					/>
					<form.SelectField
						control={form.control}
						label="Skills"
						name="skills"
						options={SkillOptions}
						placeholder="Select an your skill"
					/>
					<form.TextAreaField
						control={form.control}
						label="Bio"
						name="bio"
						placeholder="Description about you in here..."
					/>
					<form.SwitchField
						className={{
							description: "px-0!",
						}}
						control={form.control}
						description="Notification latest news about our"
						label="Subscribe"
						name="subscribe"
					/>
				</Fieldset.Group>
				<Fieldset.Actions className="justify-end">
					<FormSubmitButton>Setup complete</FormSubmitButton>
					<Button type="reset" variant="ghost">
						Reset
					</Button>
				</Fieldset.Actions>
			</Fieldset>
		</FormProvider>
	);
};
