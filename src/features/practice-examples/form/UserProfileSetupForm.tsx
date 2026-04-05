import { useForm } from "@ttpfs/form-react";
import { Description, Fieldset } from "@ttpfs/ui-react";
import type React from "react";
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

	return (
		<Fieldset>
			<Fieldset.Legend>Setup Profile</Fieldset.Legend>
			<Description>Setup your profile to get started.</Description>
			<Fieldset.Group></Fieldset.Group>
		</Fieldset>
	);
};

export const UserProfileSetupFormCode = `
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
			<Fieldset.Group></Fieldset.Group>
		</Fieldset>
	);
};`;
