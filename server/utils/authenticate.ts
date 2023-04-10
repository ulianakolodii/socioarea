import { getCookie, H3Event } from "h3";
import jwt from "jsonwebtoken";

const authenticate = (event: H3Event) => {
	const token = getCookie(event, "token");
	if (!token) {
		return {
			status: 401,
			statusText: "Token not found",
		};
	}
	const { secret } = useRuntimeConfig();
	try {
		const verified = jwt.verify(token, secret);
		return {
			status: 200,
			userId: verified.sub,
		};
	} catch (error) {
		return {
			status: 401,
			statusText: "Token is not valid",
		};
	}
};

export default authenticate;
