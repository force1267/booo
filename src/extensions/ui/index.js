import Root from "./root.svelte"

export default ({ name }) => ({
    name: "editor",
    init() {
        this.root = new Root({
            target: document.body,
            props: { name }
        });
    },
    start() {},

    // api: 
    test() {
        this.emit("test", "ok");
    }
})