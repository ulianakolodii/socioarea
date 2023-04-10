<template>
	<div><slot /></div>
</template>

<style>
:root {
	--a-input-group-border: var(--cape);
	--a-input-group-background: var(--changzhou);
	--a-input-group-hover-border: var(--casablanca);
	--a-input-group-invalid-border: var(--caracas);
	--a-input-group-color: var(--chattogram);
}
</style>

<style scoped lang="scss">
div {
	width: 100%;
	max-width: 340px;
	display: flex;
	align-items: center;
	position: relative;
	border-radius: 8px;
	background: var(--a-input-group-background);
	box-shadow: inset 0 0 0 1px var(--a-input-group-border);
	transition: box-shadow 0.2s;
	color: var(--a-input-group-color);

	&.invalid {
		box-shadow: inset 0 0 0 1px var(--a-input-group-invalid-border);

		&:focus-within {
			box-shadow: inset 0 0 0 1.5px var(--a-input-group-invalid-border);
		}
	}

	&:focus-within {
		box-shadow: inset 0 0 0 1.5px var(--a-input-group-hover-border);
	}
}
</style>
