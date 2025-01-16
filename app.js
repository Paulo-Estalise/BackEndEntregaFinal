const program = require("./src/config/commander.config.js");
const app = require("./src/App.js");

app.listen(program.opts().p, () => {
    console.warn(`Server is running on port ${program.opts().p}`);
});
