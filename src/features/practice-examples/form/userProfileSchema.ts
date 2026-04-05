import { Regex } from "@/utils";
import z from "zod";
import { type Gender, gender, type Role, roles } from "./types";

export const userProfileSchema = z.object({
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
});

export type UserProfileSchema = z.infer<typeof userProfileSchema>;

export const userProfileDefaultValues: UserProfileSchema = {
	bio: "",
	confirmPassword: "",
	dob: null,
	email: "",
	fullName: "",
	gender: "NONE",
	password: "",
	phone: "",
	role: "OTHER",
	skills: [],
	subscribe: true,
};
