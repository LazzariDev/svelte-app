
<script>
	import { setContext } from "svelte";
	import { writable } from "svelte/store";
	import { key } from ".";
	import Loader from "@components/utils/Loader.svelte";
    
    let isLoading = writable(true);
    let isAuthenticated = writable(false, (set) => {
        setTimeout(() => {
            set(true);
            isLoading.set(false);
        }, 1000)
    });


    setContext(key, {
        isAuthenticated, isLoading
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

