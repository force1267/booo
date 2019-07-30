import Root from "./root.svelte"

export default ({name}) => ({
    target: document.body,
    name: "editor",
    init() {
        console.log(this)
        this.root = new Root({
            target: document.body,
            props: {
                name: name,
            }
        });
    },
    start() {},

    // api: 
    test() {
        this.emit("test", "ok");
    }
})