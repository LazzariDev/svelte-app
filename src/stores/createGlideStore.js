import { writable } from "svelte/store"

export function createGlideStore() {
    const glides = writable([]);

    function addGlide() {
        console.log("Adding Glide!");
    }


    return {
        glides: { subscribe: glides.subscribe },
        addGlide
    }
} 