<template><input /></template>

<style lang="scss">
:root {
	--a-input-color: var(--chattogram);
	--a-input-padding: 12px;
	--a-input-placeholder-color: var(--changsha);
}
</style>

<style scoped lang="scss">
input {
	appearance: none;
	line-height: 24px;
	background: none;
	border: none;
	outline: none;
	display: block;
	width: 100%;
	margin: 0;
	padding: var(--a-input-padding);
	font-family: inherit;
	font-size: 14px;
	color: var(--a-input-color);

	&::placeholder {
		color: var(--a-input-placeholder-color);
	}

	&:-webkit-autofill,
	&:-webkit-autofill:focus {
		transition: background-color 600000s 0s, color 600000s 0s;
	}
}
</style>
