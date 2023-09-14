
import { writable } from "svelte/store";

function createStore() {
    const taskList = writable([]);

    /*setInterval(() => {

        taskList.update((list) => {
            list.push(1);
            console.log(list);
            return list;
        })

    }, 1500);*/

    return taskList;
}

export const taskListStore = createStore();