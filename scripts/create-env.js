const fs = requrire("fs");
console.log("test");
fs.writeFileSync("./.env", `API=${process.env.api}\n`);
