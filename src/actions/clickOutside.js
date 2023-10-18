// Place here some code you would like to execute whenever HTML element is mounted into the browser

export function clickOutside(node) {
    addEventListener("click", handleClick);
    
    function handleClick (e) {
        if (!node.contains(e.target)) {
            node.dispatchEvent(new CustomEvent("outclick"))
        }
    }

    return {
        destroy() {
            removeEventListener("click", handleClick);

        }
    }
}