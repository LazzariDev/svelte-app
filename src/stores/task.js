
import { readable } from "svelte/store";

function createStore() {

    const taskList = readable([], (set) => {
        let i = 0;
        let list = [];

        const id = setInterval(() => {
            list = [...list, i++];
            set(list);    
        }, 2000);

        return () => {
            clearInterval(id);
        }
    });

    return taskList;
}

export const taskListStore = createStore();