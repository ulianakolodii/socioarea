// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@vueuse/nuxt"],
	css: ["assets/css/normalize.css", "assets/css/theme-base.css"],
	runtimeConfig: {
		mongodbUri: "",
		secret: "",
		expiresIn: "15m",
	},
	nitro: {
		plugins: ["@/server/index.ts"],
		compressPublicAssets: {
			brotli: true,
		},
	},
});
