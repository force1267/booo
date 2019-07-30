export default ({initedVar}) => ({
    name: "editor",
    init({app}) {
        this.initedVar = initedVar; // todo remove
    },
    start() {
    },

    // api: 
    test() {
        this.emit("boo", this.initedVar);
    }
})