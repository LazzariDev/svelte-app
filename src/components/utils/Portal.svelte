<!-- 
    Portal is a wrapper component that renders any component or element at the end of the document.body or of a given target element.

    Use Portal to render a component or element at a different place (defaults to the end of document.body). Portal is useful when you want 
    to prevent parent styles from interfering with the child, usually all these styles are related to position and z-index properties 
    (which can be provided as props) and portals are used for components with fixed position, for example, modals or drawers. 
-->

<script>
    import { onMount } from 'svelte'
    
    let ref;
    let portal;
    
    onMount(() => {
      portal = document.createElement('div');
      portal.className = 'portal';
      document.body.appendChild(portal);
      portal.appendChild(ref);
      return () => {
        document.body.removeChild(portal);
      }
    })
    
</script>
  
<div class="portal-clone">
    <div bind:this={ref}>
    <slot></slot>
    </div>
</div>

<style>
    .portal-clone { display: none; }
</style>