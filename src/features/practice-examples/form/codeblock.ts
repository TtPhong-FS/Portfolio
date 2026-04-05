export const UserProfileSetupFormCode = `
import { FormProvider, FormSubmitButton, useForm, useFormSubmit } from "@ttpfs/form-react";
import { Button, Description, Fieldset, Grid, notification, Separator } from "@ttpfs/ui-react";
import type React from "react";
import { GenderOptions, RoleOptions, SkillOptions } from "./constants";
import {
	userProfileDefaultValues,
	userProfileSchema,
} from "./userProfileSchema";

const UserProfileSetupForm: React.FC = () => {
	const form = useForm({
		options: {
			defaultValues: userProfileDefaultValues,
		},
		schema: userProfileSchema,
	});

	return (
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
				<form.TextAreaField
					control={form.control}
					label="Bio"
					name="bio"
					placeholder="Description about you in here..."
				/>
			</Fieldset.Group>
		</Fieldset>
	);
};`;

export const userProfileSchemaCode = `
import { Regex } from "@/utils";
import z from "zod";
import { type Gender, gender, type Role, roles } from "./types";

z.object({
	bio: z.string().max(512, "Bio too long"),
	confirmPassword: z
		.string()
		.regex(
			Regex.password,
			"Invalid format password, must contain at least one upper case, digit, and greater than 8 characters",
		)
		.nonempty({ error: "Password is required" }),
	dob: z.string().nullable(),
	email: z
		.string()
		.nonempty({
			error: "Email is required",
		})
		.regex(Regex.email, "Invalid email format"),
	fullName: z.string().max(50, "Maybe this Name not your").nonempty({
		error: "Name is required",
	}),
	gender: z.enum(Object.keys(gender) as [Gender, ...Gender[]]),
	password: z
		.string()
		.regex(
			Regex.password,
			"Invalid format password, must contain at least one upper case, digit, and greater than 8 characters",
		)
		.nonempty({ error: "Password is required" }),
	phone: z.string().regex(Regex.phone, "Invalid phone format").nullable(),
	role: z.enum(Object.keys(roles) as [Role, ...Role[]]),
	skills: z.array(z.string()),
	subscribe: z.boolean(),
});`;
