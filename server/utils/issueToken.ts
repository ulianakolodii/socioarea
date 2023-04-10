import JWT from "jsonwebtoken";

const issueToken = (payload: JWT.JwtPayload) => {
	const { secret, expiresIn } = useRuntimeConfig();
	return JWT.sign(payload, secret, {
		expiresIn,
	});
};

export default issueToken;
