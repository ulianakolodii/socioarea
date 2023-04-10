<script lang="ts" setup>
import { gsap } from "gsap";

const inputValue = ref("");
const iconRef = ref<HTMLDivElement>();
const faviconRef = ref<HTMLDivElement>();

const { to } = gsap;

watchDebounced(
	inputValue,
	() => {
		if (!iconRef.value || !faviconRef.value) {
			return;
		}
		const valid = validateUrl(inputValue.value);
		to(iconRef.value, {
			"--clear-scale": inputValue.value ? 1 : 0,
			duration: inputValue.value ? 0.5 : 0.15,
			ease: inputValue.value ? "elastic.out(1, .7)" : "none",
		});
		to(iconRef.value, {
			"--clear-opacity": inputValue.value ? 1 : 0,
			duration: 0.15,
		});
		to(iconRef.value, {
			"--icon-offset": valid ? "24px" : "0px",
			duration: 0.15,
			delay: valid ? 0 : 0.2,
		});
		if (valid) {
			const oldImg = faviconRef.value.querySelector("img");
			if (oldImg) {
				oldImg.src = `https://f1.allesedv.com/64/${inputValue.value}`;
				return;
			}
			const img = new Image();
			img.onload = () => {
				if (!faviconRef.value || !iconRef.value) {
					return;
				}
				faviconRef.value.appendChild(img);
				to(iconRef.value, {
					"--favicon-scale": 1,
					duration: 0.5,
					delay: 0.2,
					ease: "elastic.out(1, .7)",
				});
			};
			img.src = `https://f1.allesedv.com/64/${inputValue.value}`;
		} else if (faviconRef.value && faviconRef.value.querySelector("img")) {
			to(iconRef.value, {
				"--favicon-scale": 0,
				duration: 0.15,
				onComplete() {
					if (!faviconRef.value) {
						return;
					}
					const oldImg = faviconRef.value.querySelector("img");
					if (oldImg) {
						oldImg.remove();
					}
				},
			});
		}
	},
	{ debounce: 250 }
);
</script>

<template>
	<MInput v-model="inputValue" :class="['url-input']" clear>
		<template #beforeInput>
			<div ref="iconRef" class="icon">
				<svg viewBox="0 0 18 18">
					<path
						d="M10.05 7.95001C11.55 9.45001 11.55 11.775 10.05 13.275L7.95 15.375C6.45 16.875 4.125 16.875 2.625 15.375C1.125 13.875 1.125 11.55 2.625 10.05L4.5 8.25001"
					/>
					<path
						d="M7.9502 10.05C6.4502 8.55 6.4502 6.225 7.9502 4.725L10.0502 2.625C11.5502 1.125 13.8752 1.125 15.3752 2.625C16.8752 4.125 16.8752 6.45 15.3752 7.95L13.5002 9.75"
					/>
				</svg>
				<div ref="faviconRef" class="favicon" />
			</div>
		</template>
		<slot />
	</MInput>
</template>

<style>
:root {
	--m-url-input-icon: var(--casablanca);
}
</style>

<style scoped lang="scss">
.url-input {
	--favicon-scale: 0;
	--icon-offset: 0px;

	.icon {
		pointer-events: none;
		padding-left: var(--a-input-padding);

		svg,
		img {
			display: block;
			width: 18px;
			height: 18px;
		}
		svg {
			fill: none;
			stroke-width: 1.5;
			stroke-linecap: round;
			stroke-linejoin: round;
			stroke: var(--m-url-input-icon);
			path {
				stroke-dasharray: 24px;
				stroke-dashoffset: var(--icon-offset);
			}
		}
		.favicon {
			position: absolute;
			top: 50%;
			margin-top: -8px;
			transform: scale(var(--favicon-scale)) translateZ(0);

			&:deep(img) {
				display: block;
				width: 18px;
				height: 18px;
			}
		}
	}
}
</style>
