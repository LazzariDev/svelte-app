<script>
	import RegisterForm from "@components/forms/RegisterForm.svelte";
	import AuthLayout from "@components/layouts/AuthLayout.svelte";

	function register(formData) {
		console.log(formData);
	}
</script>

<AuthLayout title="Create New Account">
	<RegisterForm onFormSubmit={register} />
</AuthLayout>