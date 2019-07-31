import input from "./input.svelte"

export default () => ({
    name: "editor",
    init() {
        this.input = new input({
            target: document.body,
        });
        this.dictionaries = {}
    },
    start() {},

    // api: 
    search (query, dictionaryName) {
        const dicts = this.dictionaries;
        const answer = {};
        if(dictionaryName) {
            answer[dictionaryName] = dicts[dictionaryName].find(query); // must return promise
        } else for(var d in dicts) {
            answer[d] = dicts[d].find(query); // must return promise
        }
        this.input.renderAnswer(answer).then(selection => {
            console.log("user selected", selection); // TODO
        }).catch(err => { throw err; });
    },
    register (name, dictionary) {
        if(this.dictionaries[name]) {
            throw "duplicate dictionary name";
        }
        this.dictionaries[name] = dictionary;
    }
})