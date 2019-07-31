import Root from "./root.svelte"

export default () => ({
    name: "ui",
    init() {
        this.root = new Root({
            target: document.body
        });
    },
    start() {},

    // api:
})