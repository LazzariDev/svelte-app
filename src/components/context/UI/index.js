import { getContext } from "svelte";

export const key = Symbol();
export const getUiContext = () => getContext(key);