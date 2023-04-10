<script lang="ts" setup>
withDefaults(
	defineProps<{
		variant?: "default";
	}>(),
	{ variant: "default" }
);
</script>

<template>
	<button type="button" :class="[variant]"><slot /></button>
</template>

<style scoped lang="scss">
.default {
	--a-icon-button-hover-background: #f1f1fa;

	appearance: none;
	cursor: pointer;
	position: relative;
	padding: 0;
	border: none;
	outline: none;
	background: transparent;
	transition: background, opacity 0.2s;
	border-radius: 6px;
	padding: 4px;

	&:hover {
		background: var(--a-icon-button-hover-background);
	}
}
</style>
