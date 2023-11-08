
<script>
    import { onAuthStateChanged } from "firebase/auth";
	import { onMount, setContext } from "svelte";
	import { writable } from "svelte/store";
	import { key } from ".";
	import Loader from "@components/utils/Loader.svelte";
	import { firebaseAuth } from "@db/index";
	import { getUser } from "@api/users";
    
    let isLoading = writable(true);
    let auth = writable({
        isAuthenticated: false,
        user: null
    });


    setContext(key, {
        auth, isLoading
    })

    onMount(listenToAuthChanges);

    function listenToAuthChanges() {
        onAuthStateChanged(firebaseAuth, async (user) => {
            if (user) {
                const gliderUser = await getUser(user.uid);
                console.log(gliderUser);
                auth.set({isAuthenticated: true, user: gliderUser});
            } else {
                auth.set({isAuthenticated: false, user: null});
            }

            isLoading.set(false);
        })
    }
</script>

{#if $isLoading}
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

