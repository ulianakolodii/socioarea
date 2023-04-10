<script setup lang="ts">
import { ComputedRef } from "vue";

import AButton from "../A/Button.vue";

const props = withDefaults(
	defineProps<{
		variant?: "default" | "primary" | "secondary";
		loading?: boolean;
	}>(),
	{ variant: "default", loading: false }
);

const modifiers: ComputedRef<InstanceType<typeof AButton>["$props"]["modifiers"]> = computed(() =>
	props.loading ? ["noEvents"] : undefined
);
</script>
<template>
	<AButton :variant="variant" v-bind="$attrs" :modifiers="modifiers">
		<template v-if="loading">
			<div class="spinner-wrapper">
				<ASpinner :stroke-width="5" :size="20" :color="`var(--a-button-${variant}-color)`" />
			</div>
		</template>
		<template v-if="loading">
			<div class="hidden-text"><slot /></div>
		</template>
		<template v-if="!loading">
			<slot />
		</template>
	</AButton>
</template>

<styled scoped lang="scss">
.spinner-wrapper {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: none;
}
.hidden-text {
	visibility: hidden;
}
</styled>
