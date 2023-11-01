
<script>
    import { onAuthStateChanged } from "firebase/auth";
	import { onMount, setContext } from "svelte";
	import { writable } from "svelte/store";
	import { key } from ".";
	import Loader from "@components/utils/Loader.svelte";
	import { firebaseAuth } from "@db/index";
    
    let isLoading = writable(true);
    let isAuthenticated = writable(false);


    setContext(key, {
        isAuthenticated, isLoading
    })

    onMount(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                isAuthenticated.set(true);
            } else {
                isAuthenticated.set(false);
            }

            isLoading.set(false);
        })
    })
</script>

{#if $isLoading && !$isAuthenticated}
<!-- isLoading true -->
<Loader size={80}/>
{:else}
<slot />
{/if}
<!-- In the if above is checked also !$isAuthenticated just to subscribe so start function can be called   -->
<!-- The same thing can be achived as follow: -->
<!-- 
    <div style="display:none;">
        {$isAuthenticated}
    </div>

    {#if $isLoading}
        <Loader size={80}/>
    {:else}
        <slot />
    {/if}
 -->

