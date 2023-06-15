const fs = require("fs");

let data = fs.readFileSync("practice.json");

console.log(JSON.parse(data));