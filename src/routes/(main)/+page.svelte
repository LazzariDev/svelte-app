<script>
	import Messenger from "@components/utils/Messenger.svelte";
    import GlidePost from "../../components/glides/GlidePost.svelte"
	import { createGlideStore } from "@stores/createGlideStore";
	import DataLoaderIndicator from "@components/utils/DataLoaderIndicator.svelte";
	import CenteredDataLoader from "@components/utils/CenteredDataLoader.svelte";

    const { glides, loading, addGlide } = createGlideStore();
</script>

<Messenger 
    onGlidePosted={addGlide}
/>

<div class="h-px bg-gray-700 my-1" />
{#each $glides as glide (glide.id)}
    <GlidePost {glide} />
{/each}

{#if $loading}
    <CenteredDataLoader />
{/if}