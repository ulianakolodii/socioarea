<script setup lang="ts">
withDefaults(
	defineProps<{
		size?: number;
		strokeWidth?: number;
		color?: string;
	}>(),
	{ size: 50, strokeWidth: 2, color: "var(--chaozhou)" }
);
</script>
<template>
	<svg class="spinner" viewBox="0 0 50 50" :style="{ width: `${size}px`, height: `${size}px` }">
		<circle class="path" cx="25" cy="25" r="20" fill="none" :stroke-width="strokeWidth" :style="{ stroke: color }" />
	</svg>
</template>

<style scoped lang="scss">
.spinner {
	animation: rotate 2s ease-in-out infinite;

	& .path {
		stroke-linecap: round;
		animation: dash 1.5s ease-in-out infinite;
	}
}

@keyframes rotate {
	100% {
		transform: rotate(360deg);
	}
}

@keyframes dash {
	0% {
		stroke-dasharray: 1, 150;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 90, 150;
		stroke-dashoffset: -35;
	}
	100% {
		stroke-dasharray: 90, 150;
		stroke-dashoffset: -124;
	}
}
</style>
