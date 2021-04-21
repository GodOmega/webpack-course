const fs = requrire("fs");

fs.writeFileSync("./.env", `API=${process.env.api}\n`);
