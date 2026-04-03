import { Regex } from "@/utils";
import z from "zod";

export const contactSchema = z.object({
	email: z.string().regex(Regex.email, "Invalid email format").nonempty({
		error: "Email is required",
	}),
	name: z
		.string()
		.nonempty({
			error: "Your name is required",
		})
		.max(50, "Your name is too long"),
	note: z.string().max(512, "Note too long"),
});

export const contactDefaultValues = {
	email: "",
	name: "",
	note: "",
};

export type ContactSchema = z.infer<typeof contactSchema>;
