
<script>
	import { setContext } from "svelte";
	import { writable } from "svelte/store";
	import { key } from ".";

    let isAuthenticated = writable(false);
    let isLoading = writable(true);

    setContext(key, {
        isAuthenticated, isL
    })

</script>

<slot />