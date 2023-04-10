import me from "../utils/me";

export default defineEventHandler(async (event) => {
	const user = await me(event);
	return user;
});
