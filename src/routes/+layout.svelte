<script>
	import UiContext from "@components/context/UI/UIContext.svelte";
    import "../app.css"
	import AuthContext from "@components/context/auth/AuthContext.svelte";
	import SnackbarContainer from "@components/snackbar/SnackbarContainer.svelte";
</script>

<UiContext>
    <AuthContext>
        <SnackbarContainer />
        <slot />
    </AuthContext>
</UiContext>