<script setup lang="ts">
withDefaults(
	defineProps<{
		variant?: "default" | "primary" | "secondary";
		modifiers?: Array<"noEvents">;
	}>(),
	{ variant: "default" }
);
</script>

<template>
	<button v-bind="$attrs" :class="[variant, ...(modifiers || [])]"><slot /></button>
</template>

<style lang="scss">
:root {
	--a-button-border-radius: 8px;
	--a-button-default-color: var(--coimbatore);
	--a-button-default-background-color: var(--changzhou);
	--a-button-default-border-color: var(--camayenne);
	--a-button-default-hover-background-color: var(--cairo);
	--a-button-default-active-background-color: var(--changchun);

	--a-button-primary-color: var(--changzhou);
	--a-button-primary-background-color: var(--casablanca);
	--a-button-primary-hover-background-color: var(--casablanca-darker);
	--a-button-primary-active-background-color: var(--casablanca-darkest);

	--a-button-secondary-color: var(--changzhou);
	--a-button-secondary-background-color: var(--conakry);
	--a-button-secondary-hover-background-color: var(--conakry-darker);
	--a-button-secondary-active-background-color: var(--conakry-darkest);
}
</style>

<style scoped lang="scss">
button {
	appearance: none;
	outline: none;
	border: none;
	border-radius: var(--a-button-border-radius);
	padding: 12px 16px;
	cursor: pointer;
	font-family: inherit;
	font-size: 14px;
	font-weight: 500;
	position: relative;

	&[disabled] {
		opacity: 0.5;
		cursor: not-allowed;
		user-select: none;
		position: relative;
	}

	&.noEvents {
		pointer-events: none;
	}

	&.default {
		color: var(--a-button-default-color);
		background-color: var(--a-button-default-background-color);
		box-shadow: inset 0 0 0 1px var(--a-button-default-border-color);

		&:hover:not([disabled]) {
			background-color: var(--a-button-default-hover-background-color);
		}

		&:active:not([disabled]) {
			background-color: var(--a-button-default-active-background-color);
		}
	}

	&.primary {
		color: var(--a-button-primary-color);
		background-color: var(--a-button-primary-background-color);

		&:hover:not([disabled]) {
			background-color: var(--a-button-primary-hover-background-color);
		}

		&:active:not([disabled]) {
			background-color: var(--a-button-primary-active-background-color);
		}
	}

	&.secondary {
		color: var(--a-button-secondary-color);
		background-color: var(--a-button-secondary-background-color);

		&:hover:not([disabled]) {
			background-color: var(--a-button-secondary-hover-background-color);
		}

		&:active:not([disabled]) {
			background-color: var(--a-button-secondary-active-background-color);
		}
	}
}
</style>
