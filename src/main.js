import app from "./app.js";
import Editor from "./extensions/editor/index.js";
import UI from "./extensions/ui/index.js";
import ProjectManager from "./extensions/projectManager/index.js";

// read config here
const config = { editor: { initedVar: 12 }, ui: { name: "hexa" } };

const ui = UI(config.ui);
app.use(ui);
const editor = Editor(config.editor);
app.use(editor);
const projectManager = ProjectManager(config.projectManager);
app.use(projectManager);

app.start().then(function main() {
    // main function here
}).catch(err => { throw err; });