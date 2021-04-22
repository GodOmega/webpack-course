const fs = require("fs");
console.log("test");
fs.writeFileSync("./.env", `API=${process.env.API}\n`);
