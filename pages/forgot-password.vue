<script setup lang="ts">
const email = ref("");

const handleSubmit = (event: Event) => {
	console.log(event);
};

// definePageMeta({
// 	middleware: ["guest"],
// });
</script>
<template>
	<NuxtLayout name="form" @submit="handleSubmit">
		<template #default>
			<form @submit.prevent="handleSubmit">
				<MEmailInput v-model="email" placeholder="Email" clear autofocus />
				<AButton variant="primary">Remind me</AButton>
			</form>
		</template>
		<template #links>
			<NuxtLink to="/login">
				<AText variant="topeka" :modifiers="['link']">Login</AText>
			</NuxtLink>
			<div class="divider">
				<AVerticalDivider />
			</div>
			<NuxtLink to="/registration">
				<AText variant="topeka" :modifiers="['link']">Create new account</AText>
			</NuxtLink>
		</template>
	</NuxtLayout>
</template>
