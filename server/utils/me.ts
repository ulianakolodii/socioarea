import { H3Event, createError } from "h3";

import { findOne } from "../db/users";

import authenticate from "./authenticate";
import issueToken from "./issueToken";
import refreshToken from "./refreshToken";

export default async (event: H3Event) => {
	const auth = authenticate(event);
	let userId = auth.userId;
	if (auth.status !== 200) {
		const tokenResult = await refreshToken(event);
		if (tokenResult.status !== 200) {
			throw createError(tokenResult);
		}
		userId = tokenResult.userId;
		const token = issueToken({ sub: userId });
		setCookie(event, "token", token);
	}
	const user = await findOne({ _id: userId });
	if (!user) {
		throw createError({
			status: 401,
			statusText: "User not found",
		});
	}
	return user;
};
