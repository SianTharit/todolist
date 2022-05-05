const fs = require("fs/promises");
const path = require("path");

//// ----- function for read file ----->
exports.readFile = async (path) => {
    const data = await fs.readFile(path, "utf8");
    return JSON.parse(data);
};
// return เป็น promise Object
//เป็น function asynchronouse

//// ----- function for write file ----->
exports.writeFile = (path, data) => fs.writeFile(path, JSON.stringify(data));
// return promise Object
//เป็น function asynchronouse
