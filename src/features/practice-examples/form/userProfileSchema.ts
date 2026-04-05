import z from "zod";

export const userProfileSchema = z.object({});

export type UserProfileSchema = z.infer<typeof userProfileSchema>;

export const userProfileDefaultValues: UserProfileSchema = {};

export const userProfileSchemaCode = `z.object({})`;
