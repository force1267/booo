import app from "./app.js";
import Editor from "./extensions/editor/index.js";
import UI from "./extensions/ui/index.js";

// read config here
const config = { editor: { initedVar: 12 }, ui: { name: "hexa" } };

const ui = UI(config.ui);
app.use(ui);
const editor = Editor(config.editor);
app.use(editor);

app.start().then(function main() {
    // main function here
    // event test
    editor.on("boo", e => {
        console.log(`main > editor > boo > f1 : ${e}`);
    })
    // once test
    editor.once("boo", e => {
        console.log(`main > editor > boo > once : ${e}`);
    })
    // multiple eventCB test
    editor.on("boo", e => {
        console.log(`main > editor > boo > f2 : ${e}`);
    })
    // off test
    var f3;
    editor.on("boo", f3 = e => {
        console.log(`main > editor > boo > f3 : ${e}`);
    })
    editor.off("boo", f3);
    editor.on("boo", e => {
        document.write(`main > editor > boo > f2 : ${e}`);
    })

}).catch(err => {
    throw err;
})

// export default ui.root;