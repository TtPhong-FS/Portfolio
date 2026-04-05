export const gender = {
	FEMALE: "FEMALE",
	MALE: "MALE",
	NONE: "NONE",
} as const;

export type Gender = (typeof gender)[keyof typeof gender];

export const roles = {
	DEVELOPER: "DEVELOPER",
	MANAGER: "MANAGER",
	OTHER: "OTHER",
} as const;

export type Role = (typeof roles)[keyof typeof roles];
