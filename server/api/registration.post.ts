import { create as createToken } from "../db/tokens";
import { findOne, create } from "../db/users";
import { useSaveRegistrationBody } from "../hooks";
import issueRefreshToken from "../utils/issueRefreshToken";
import issueToken from "../utils/issueToken";
import passwordHash from "../utils/passwordHash";

export default defineEventHandler(async (event) => {
	const body = await useSaveRegistrationBody(event);
	if (!body.success) {
		return {
			sucess: false,
			error: "Invalid body",
		};
	}
	const { login, password: virginPassword, email } = body.data;
	const userExist = await findOne({
		$or: [{ email }, { login }],
	});
	if (userExist) {
		return {
			sucess: false,
			error: "User already exist",
		};
	}
	const password = passwordHash(virginPassword);
	const user = await create({ login, password, email });

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
