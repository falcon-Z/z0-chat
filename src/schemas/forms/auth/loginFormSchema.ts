import * as z from "zod";

export const loginSchema = z.object({
	username: z
		.string()
		.toLowerCase()
		.min(3, "Username must be at least 3 characters long")
		.max(18, "Username must be less than 18 characters long")
		.regex(
			/^[A-Za-z0-9_@.-]*$/,
			"Username can only contain letters, numbers, underscores and periods",
		),
	password: z
		.string()
		.min(8, "Password must be at least 8 characters long")
		.max(32, "Password must be less than 32 characters long")
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
			"Password must contain at least one lowercase, one uppercase, one number and one special character",
		),
});
