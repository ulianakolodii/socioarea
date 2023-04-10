<script lang="ts" setup>
import { gsap } from "gsap";

import AInput from "../A/Input.vue";
import AInputGroup from "../A/InputGroup.vue";

const { to, set } = gsap;
const isClearing = ref(false);
const inputGroupRef = ref<InstanceType<typeof AInputGroup>>();
const inputRef = ref<InstanceType<typeof AInput>>();
const svgLineRef = ref<SVGPathElement>();

const getInvalidClass = (invalid: boolean | undefined) => {
	if (invalid === undefined) {
		return "";
	}
	return invalid ? "invalid" : "valid";
};

const svgLineProxy = new Proxy(
	{
		x: null,
	},
	{
		set(target, key: "x", value) {
			target[key] = value;
			if (target.x !== null && svgLineRef.value) {
				svgLineRef.value.setAttribute("d", getSvgPath(target.x, 0.1925));
			}
			return true;
		},
		get(target, key: "x") {
			return target[key];
		},
	}
);
withDefaults(
	defineProps<{
		clear?: boolean;
		modelValue?: string;
		invalid?: boolean;
	}>(),
	{ clear: false, modelValue: "", invalid: undefined }
);

const emit = defineEmits(["update:modelValue"]);

const handleStartClearing = () => {
	if (!inputRef.value || !inputGroupRef.value) {
		return;
	}
	isClearing.value = true;
	set(inputGroupRef.value.$el, {
		"--clear-swipe-left": `${(inputRef.value.$el.offsetWidth - 16) * -1}px`,
	});
	to(inputGroupRef.value.$el, {
		keyframes: [
			{
				"--clear-rotate": "45deg",
				duration: 0.25,
			},
			{
				"--clear-arrow-x": "2px",
				"--clear-arrow-y": "-2px",
				duration: 0.15,
			},
			{
				"--clear-arrow-x": "-3px",
				"--clear-arrow-y": "3px",
				"--clear-swipe": "-3px",
				duration: 0.15,
				onStart() {
					to(svgLineProxy, {
						x: 3,
						duration: 0.1,
						delay: 0.05,
					});
				},
			},
			{
				"--clear-swipe-x": 1,
				"--clear-x": `${inputRef.value.$el.offsetWidth * -1}px`,
				duration: 0.45,
				onComplete() {
					if (!inputRef.value || !inputGroupRef.value) {
						return;
					}
					inputRef.value.$el.value = "";
					inputRef.value.$el.focus();
					isClearing.value = false;
					emit("update:modelValue", "");
					to(inputGroupRef.value.$el, {
						"--clear-arrow-offset": "4px",
						"--clear-arrow-offset-second": "4px",
						"--clear-line-array": "8.5px",
						"--clear-line-offset": "27px",
						"--clear-long-offset": "24px",
						"--clear-rotate": "0deg",
						"--clear-arrow-o": 1,
						duration: 0,
						delay: 0.7,
					});
					to(inputGroupRef.value.$el, {
						"--clear-opacity": 0,
						duration: 0.2,
						delay: 0.55,
					});
					to(inputGroupRef.value.$el, {
						"--clear-arrow-o": 0,
						"--clear-arrow-x": "0px",
						"--clear-arrow-y": "0px",
						"--clear-swipe": "0px",
						duration: 0.15,
					});
					to(svgLineProxy, {
						x: 0,
						duration: 0.45,
						ease: "elastic.out(1, .75)",
					});
				},
			},
			{
				"--clear-swipe-x": 0,
				"--clear-x": "0px",
				duration: 0.4,
				delay: 0.35,
			},
		],
	});
	to(inputGroupRef.value.$el, {
		"--clear-arrow-offset": "0px",
		"--clear-arrow-offset-second": "8px",
		"--clear-line-array": "28.5px",
		"--clear-line-offset": "57px",
		"--clear-long-offset": "17px",
		duration: 0.2,
	});
};
</script>

<template>
	<AInputGroup ref="inputGroupRef" :class="['input-group', getInvalidClass(invalid), isClearing ? 'clearing' : '']">
		<slot name="beforeInput" />
		<AInput
			ref="inputRef"
			class="input"
			v-bind="$attrs"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
		<slot name="afterInput" />

		<template v-if="clear">
			<slot name="beforeClearButton" />
			<AIconButton class="clear" tabindex="-1" @click="handleStartClearing">
				<svg viewBox="0 0 24 24">
					<path ref="svgLineRef" class="line" d="M2 2L22 22" />
					<path class="long" d="M9 15L20 4" />
					<path class="arrow" d="M13 11V7" />
					<path class="arrow" d="M17 11H13" />
				</svg>
			</AIconButton>
			<slot name="afterClearButton" />
		</template>
	</AInputGroup>
</template>

<style>
:root {
	--m-input-close: var(--cali);
	--m-input-close-light: var(--chennai);
	--m-input-close-background: var(--changchun);
	--m-input-clearing-close-background: transparent;
}
</style>

<style scoped lang="scss">
.input-group {
	--clear-x: 0px;
	--clear-swipe-left: 0px;
	--clear-swipe-x: 0;
	--clear-swipe: 0px;
	--clear-scale: 0;
	--clear-rotate: 0deg;
	--clear-opacity: 0;
	--clear-arrow-o: 1;
	--clear-arrow-x: 0px;
	--clear-arrow-y: 0px;
	--clear-arrow-offset: 4px;
	--clear-arrow-offset-second: 4px;
	--clear-line-array: 8.5px;
	--clear-line-offset: 27px;
	--clear-long-array: 8.5px;
	--clear-long-offset: 24px;

	&.clearing {
		.clear {
			background: var(--m-input-clearing-close-background);
		}

		&:deep(svg) {
			stroke: var(--m-input-close-light);
		}
	}

	.input:not(:placeholder-shown) + .clear {
		opacity: 1;
		transform: scale(1) translateZ(0);
	}

	.clear {
		padding: 0;
		margin: 12px 12px 12px 0;

		opacity: 0;
		transform: scale(0) translateZ(0);

		&:before {
			content: "";
			position: absolute;
			top: 0;
			bottom: 0;
			right: 12px;
			left: var(--clear-swipe-left);
			background: var(--a-input-group-background);
			transform-origin: 100% 50%;
			transform: translateX(var(--clear-swipe)) scaleX(var(--clear-swipe-x)) translateZ(0);
		}

		&:deep(svg) {
			display: block;
			position: relative;
			z-index: 1;
			width: 24px;
			height: 24px;
			outline: none;
			cursor: pointer;
			fill: none;
			stroke-width: 1.5;
			stroke-linecap: round;
			stroke-linejoin: round;
			stroke: var(--m-input-close);
			transform: translateX(var(--clear-x)) rotate(var(--clear-rotate)) translateZ(0);

			path {
				transition: stroke 0.2s;

				&.arrow {
					stroke: var(--clear-arrow-stroke, var(--m-input-close));
					stroke-dasharray: 4px;
					stroke-dashoffset: var(--clear-arrow-offset);
					opacity: var(--clear-arrow-o);
					transform: translate(var(--clear-arrow-x), var(--clear-arrow-y)) translateZ(0);

					&:last-child {
						stroke-dashoffset: var(--clear-arrow-offset-second);
					}
				}

				&.line {
					stroke-dasharray: var(--clear-line-array) 28.5px;
					stroke-dashoffset: var(--clear-line-offset);
				}

				&.long {
					stroke: var(--clear-arrow-stroke, var(--m-input-close));
					stroke-dasharray: var(--clear-long-array) 15.5px;
					stroke-dashoffset: var(--clear-long-offset);
					opacity: var(--clear-arrow-o);
					transform: translate(var(--clear-arrow-x), var(--clear-arrow-y)) translateZ(0);
				}
			}
		}
	}
}
</style>
