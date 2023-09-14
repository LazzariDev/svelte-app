
import { writable } from "svelte/store";

function createStore() {
    let i = 0;
    const taskList = writable([], () => {
        setInterval(() => {
            taskList.update((list) => [...list, i++])
        }, 1500);
    });

    return taskList;
}

export const taskListStore = createStore();