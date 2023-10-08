<script>
    import TiArrowSync from "svelte-icons/ti/TiArrowSync.svelte";
    export let size = 27;
</script>
  
<div class="flex-it text-white justify-center items-center h-full">
    <div class="rotating">
        <div class="icon" style="width: {size}px; height: {size}px" >
            <TiArrowSync />
        </div>
    </div>
</div>