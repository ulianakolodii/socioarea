<script lang="ts" setup>
const inputValue = ref("");
const passwordIconRef = ref<SVGSVGElement>();
const passwordIconTopRef = ref<SVGSVGElement>();
const passwordHidden = ref(true);
</script>

<template>
	<MInput
		v-model="inputValue"
		:type="passwordHidden ? 'password' : 'text'"
		:class="['password-input', passwordHidden ? undefined : 'show']"
	>
		<template #afterInput>
			<AIconButton tabindex="-1" @click="passwordHidden = !passwordHidden">
				<svg ref="passwordIconRef" viewBox="0 0 21 21" class="password-icon">
					<circle class="eye" cx="10.5" cy="10.5" r="2.25" />
					<path
						ref="passwordIconTopRef"
						class="top"
						d="M2 10.5C2 10.5 6.43686 5.5 10.5 5.5C14.5631 5.5 19 10.5 19 10.5"
					/>
					<path class="bottom" d="M2 10.5C2 10.5 6.43686 15.5 10.5 15.5C14.5631 15.5 19 10.5 19 10.5" />
					<g class="lashes">
						<path d="M10.5 15.5V18" />
						<path d="M14.5 14.5L15.25 17" />
						<path d="M6.5 14.5L5.75 17" />
						<path d="M3.5 12.5L2 15" />
						<path d="M17.5 12.5L19 15" />
					</g>
				</svg>
			</AIconButton>
		</template>
		<slot />
	</MInput>
</template>

<style>
:root {
	--m-password-input-icon: var(--chennai);
}
</style>

<style scoped lang="scss">
.password-input {
	--eye-background: 0;
	--eye-offset: 3px;
	--eye-wrapper-y: 0;
	--eye-y: 0;
	--eye-x: 0;
	--eye-s: 1;

	button {
		padding: 0;
		margin: 12px 12px 12px 0;

		&:hover {
			background: transparent;
		}
		.password-icon {
			width: 24px;
			height: 24px;
			cursor: pointer;

			pointer-events: none;
			.top,
			.bottom,
			.lashes {
				fill: none;
				stroke: var(--m-password-input-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
			}
			.lashes {
				stroke-dasharray: 3px;
				stroke-dashoffset: var(--eye-offset);
			}
			.top {
				fill-opacity: var(--eye-background);
				transition: opacity 0.3s;
			}
			.eye {
				fill: var(--m-password-input-icon);
				transform-origin: 10.5px 13.5px;
				transform: translate(var(--eye-x), var(--eye-y)) scale(var(--eye-s)) translateZ(0);
				transition: transform var(--eye-duration, 0.3s);
			}
		}
	}

	&.show {
		--default-y: -12px;
		--default-o: 0;
		--default-pe: none;
		--clear-y: 0;
		--clear-o: 1;
		--clear-pe: auto;
		--eye-offset: 0px;
		--eye-s: 0;

		.top {
			opacity: 0;
		}
	}
}
</style>
