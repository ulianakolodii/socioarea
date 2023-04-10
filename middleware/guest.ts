export default defineNuxtRouteMiddleware(() => {
	const token = useCookie("token");
	if (token.value) {
		return false;
	}
	return true;
});
