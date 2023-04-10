<script setup lang="ts">
definePageMeta({
	middleware: ["guest"],
});

const login = ref("");
const password = ref("");
const loading = ref(false);
const disabled = computed(() => !login.value || !password.value);

const handleSubmit = async () => {
	loading.value = true;
	const result = await $fetch("/api/login", { method: "post", body: { login: login.value, password: password.value } });
	loading.value = false;
	if (result.sucess) {
		navigateTo("/");
	}
};
</script>
<template>
	<NuxtLayout name="form" @submit="handleSubmit">
		<template #default>
			<form @submit.prevent="handleSubmit">
				<MInput v-model="login" placeholder="Login" autofocus />
				<MPasswordInput v-model="password" placeholder="Password" />
				<MButton variant="primary" :loading="loading" :disabled="disabled">Log in</MButton>
			</form>
		</template>
		<template #links>
			<NuxtLink to="/forgot-password">
				<AText variant="topeka" :modifiers="['link']">Forgot your password?</AText>
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
