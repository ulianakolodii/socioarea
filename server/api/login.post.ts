import { setCookie } from "h3";

import { create as createToken } from "../db/tokens";
import { findOne } from "../db/users";
import { useSaveLoginBody } from "../hooks";
import issueRefreshToken from "../utils/issueRefreshToken";
import issueToken from "../utils/issueToken";
import passwordHash from "../utils/passwordHash";

export default defineEventHandler(async (event) => {
	const body = await useSaveLoginBody(event);
	if (!body.success) {
		return {
			sucess: false,
			error: "Invalid body",
		};
	}
	const { login, password: virginPassword } = body.data;
	const password = passwordHash(virginPassword);

	const user = await findOne({ login, password });
	if (!user) {
		return {
			sucess: false,
			error: "Invalid login or password",
		};
	}
	const token = issueToken({ sub: user._id.toString() });
	const refreshToken = issueRefreshToken();

	createToken({ token: refreshToken, userId: user._id });

	setCookie(event, "refreshToken", refreshToken, { maxAge: 604800 });
	setCookie(event, "token", token, { maxAge: 604800 });

	return {
		sucess: true,
		data: {
			user,
		},
	};
});
