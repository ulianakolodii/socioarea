import { getCookie, H3Event } from "h3";

import { findOne, deleteOne, create } from "../db/tokens";

import issueRefreshToken from "./issueRefreshToken";

const refreshToken = async (event: H3Event) => {
	const token = getCookie(event, "refreshToken");
	if (!token) {
		return {
			status: 401,
			statusText: "Refresh token not found",
		};
	}
	const record = await findOne({ token });
	if (!record) {
		return {
			status: 401,
			statusText: "Refresh token not found",
		};
	}
	await deleteOne({ token });
	const refreshToken = issueRefreshToken();
	create({ token: refreshToken, userId: record.userId });
	setCookie(event, "refreshToken", refreshToken);

	return {
		status: 200,
		userId: record.userId,
	};
};

export default refreshToken;
