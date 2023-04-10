<template>
	<MInput class="email-input">
		<template #beforeInput>
			<svg class="email-icon" viewBox="0 0 18 18">
				<path
					d="M11.5,10.5 C6.4987941,17.5909626 1,3.73719105 11.5,6 C10.4594155,14.5485365 17,13.418278 17,9 C17,4.581722 13.418278,1 9,1 C4.581722,1 1,4.581722 1,9 C1,13.418278 4.581722,17 9,17 C13.418278,17 17,13.42 17,9"
				/>
				<polyline points="5 9.25 8 12 13 6" />
			</svg>
		</template>
		<slot />
	</MInput>
</template>

<style>
:root {
	--m-email-input-icon: var(--chennai);
	--m-email-input-icon-focus: var(--cali);
	--m-email-input-icon-invalid: var(--caracas);
	--m-email-input-icon-valid: var(--chicago);
}
</style>

<style scoped lang="scss">
.email-input {
	&.invalid {
		.email-icon {
			stroke: var(--m-email-input-icon-invalid);
		}
	}

	&.valid {
		--i: var(--m-email-input-icon-valid);
		--path: 132;
		--path-delay: 0s;
		--tick: 0;
		--tick-delay: 0.3s;

		.email-icon {
			stroke: var(--m-email-input-icon-valid);
		}
	}

	&:focus-within:not(.invalid):not(.valid) {
		.email-icon {
			stroke: var(--m-email-input-icon-focus);
		}
	}
	.email-icon {
		width: 24px;
		height: 24px;
		display: block;
		fill: none;
		stroke: var(--i, var(--m-email-input-icon));
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 1.6;
		transition: stroke 0.3s;
		padding-left: var(--a-input-padding);
		path {
			stroke-dasharray: 80;
			stroke-dashoffset: var(--path, 170);
			transition: stroke-dashoffset 0.5s ease var(--path-delay, 0.3s);
		}
		polyline {
			stroke-dasharray: 12;
			stroke-dashoffset: var(--tick, 12);
			transition: stroke-dashoffset 0.45s ease var(--tick-delay, 0s);
		}
	}
}
</style>
