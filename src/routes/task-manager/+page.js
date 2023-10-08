export const ssr = false; // Server Side Rendering

// Called before the page is rendered and it must be called load
export function load() {
    // Fetch data from API/Database ...
    return {
        appName: 'Task Manager',
        content: 'Board'
    }
}