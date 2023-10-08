
export const ssr = true; // Prerenderes server side
// export const ssr = false; // Rendered just client side
// export const prerender = true; // Prerendered just once when we built the application - 'npm run build' and then 'npm run preview'

export function load() {
    const randomNum = Math.floor(Math.random() * 10);
    console.log('Calling Load: ' + randomNum);
    return {
        test1: "Hello World",
        test2: randomNum
    }
}