<template>
	<main>
		<slot />
		<div class="links"><slot name="links" /></div>
	</main>
</template>

<style scoped lang="scss">
main {
	display: flex;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	position: fixed;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 24px;

	&:deep(form) {
		max-width: 400px;
		min-width: 300px;
		display: flex;
		gap: 16px;
		flex-direction: column;
	}

	.links {
		display: flex;
		gap: 8px;
		align-items: center;
		justify-content: center;

		&:deep(.divider) {
			height: 16px;
		}
	}
}
</style>
