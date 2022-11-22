import executeCommand from "./command.js";

const feature = process.env.SPEC;
const command = `node ./scripts/runner.js "${feature}"`
console.log(command);
executeCommand(command);


