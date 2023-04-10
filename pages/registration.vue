<script setup lang="ts">
definePageMeta({
	middleware: ["guest"],
});
const login = ref("");
const email = ref("");
const password = ref("");
const confirmation = ref("");
const loading = ref(false);

const handleSubmit = async () => {
	console.log("submit");
	loading.value = true;
	const result = await $fetch("/api/registration", {
		method: "post",
		body: { login: login.value, password: password.value, email: email.value },
	});
	loading.value = false;
	console.log(result, login.value, password.value);
};

const isLoginValid = computed(() => login.value.length > 3 && login.value.length < 20);
const isEmailValid = computed(() => validateEmail(email.value));
const isPasswordValid = computed(() => password.value === confirmation.value);

const disabled = computed(
	() =>
		!login.value ||
		!email.value ||
		!password.value ||
		!confirmation.value ||
		!isEmailValid.value ||
		!isPasswordValid.value ||
		!isLoginValid.value
);
</script>

<template>
	<NuxtLayout name="form">
		<template #default>
			<form @submit.prevent="handleSubmit">
				<MInput
					v-model="login"
					placeholder="Login"
					:invalid="login === '' ? undefined : !isLoginValid"
					clear
					autofocus
				/>
				<MEmailInput v-model="email" placeholder="Email" :invalid="email === '' ? undefined : !isEmailValid" clear />
				<MPasswordInput v-model="password" placeholder="Password" />
				<MInput
					v-model="confirmation"
					type="password"
					placeholder="Confirmation"
					:invalid="confirmation === '' ? undefined : !isPasswordValid"
					clear
				/>
				<AButton variant="primary" :loading="loading" :disabled="disabled"> Create new account </AButton>
			</form>
		</template>
		<template #links>
			<NuxtLink to="/forgot-password">
				<AText variant="topeka" :modifiers="['link']">Forgot your password?</AText>
			</NuxtLink>
			<div class="divider">
				<AVerticalDivider />
			</div>
			<NuxtLink to="/login">
				<AText variant="topeka" :modifiers="['link']">Login</AText>
			</NuxtLink>
		</template>
	</NuxtLayout>
</template>
