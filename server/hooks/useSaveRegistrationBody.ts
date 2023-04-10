import { H3Event } from "h3";
import { useSafeValidatedBody } from "h3-zod";
import { z } from "zod";

const RegistrationZodSchema = z.object({
	login: z.string(),
	email: z.string(),
	password: z.string(),
});

export const useSaveRegistrationBody = (event: H3Event) => useSafeValidatedBody(event, RegistrationZodSchema);
