import { H3Event } from "h3";
import { useSafeValidatedBody } from "h3-zod";
import { z } from "zod";

const LoginZodSchema = z.object({
	login: z.string(),
	password: z.string(),
});

export const useSaveLoginBody = (event: H3Event) => useSafeValidatedBody(event, LoginZodSchema);
