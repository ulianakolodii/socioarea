<script lang="ts">
export const variantList = ["tucson", "tulsa", "tampa", "turin", "toledo", "tempe", "topeka", "ternopil"] as const;

export const modifierList = [
	"bold",
	"normal",
	"medium",
	"black",
	"hairline",
	"light",
	"link",
	"underline",
	"nowrap",
	"uppercase",
	"capitalize",
	"inheritColor",
	"inheritSize",
	"wide",
	"esllipsis",
	"italic",
] as const;
</script>

<script setup lang="ts">
withDefaults(
	defineProps<{
		variant?: (typeof variantList)[number];
		as?: string;
		modifiers?: Array<(typeof modifierList)[number]>;
	}>(),
	{ variant: "tempe", as: "span" }
);
</script>

<template>
	<component :is="as" :class="[variant, ...(modifiers || [])]">
		<slot />
	</component>
</template>

<style>
:root {
	--a-text-link-color: var(--changsha);
	--a-text-link-color-hover: var(--changsha-darker);
	--a-text-link-color-visited: var(--changsha-darkest);
}
</style>

<style scoped lang="scss">
.tucson {
	font-size: 48px;
	line-height: 1.5;

	@media (max-width: 1023px) {
		font-size: 40px;
		line-height: 1.25;
	}
}

.tulsa {
	font-size: 40px;
	line-height: 1.5;

	@media (max-width: 1023px) {
		font-size: 32px;
		line-height: 1.25;
	}
}

.tampa {
	font-size: 32px;
	line-height: 1.5;

	@media (max-width: 1023px) {
		font-size: 26px;
		line-height: 1.25;
	}
}

.turin {
	font-size: 24px;
	line-height: 1.5;

	@media (max-width: 1023px) {
		font-size: 22px;
		line-height: 1.25;
	}
}

.toledo {
	font-size: 20px;
	line-height: 1.5;

	@media (max-width: 1023px) {
		font-size: 18px;
		line-height: 1.25;
	}
}

.tempe {
	font-size: 16px;
	line-height: 1.5;

	@media (max-width: 1023px) {
		font-size: 16px;
		line-height: 1.25;
	}
}

.topeka {
	font-size: 14px;
	line-height: 1.5;

	@media (max-width: 1023px) {
		font-size: 14px;
		line-height: 1.25;
	}
}

.ternopil {
	font-size: 12px;
	line-height: 1.5;

	@media (max-width: 1023px) {
		font-size: 12px;
		line-height: 1.25;
	}
}

.bold {
	font-weight: 700;
}

.normal {
	font-weight: 400;
}

.medium {
	font-weight: 500;
}

.black {
	font-weight: 900;
}

.linght {
	font-weight: 300;
}

.hairline {
	font-weight: 100;
}

.nowrap {
	white-space: nowrap;
}

.uppercase {
	text-transform: uppercase;
}

.link {
	color: var(--a-text-link-color);
	cursor: pointer;

	&:hover {
		color: var(--a-text-link-color-hover);
	}

	&:visited {
		color: var(--a-text-link-color-visited);
	}
}

.underline {
	text-decoration: underline;
}

.inheritColor {
	color: inherit;
}

.inheritSize {
	font-size: inherit;
}

.capitalize {
	text-transform: capitalize;
}
</style>
