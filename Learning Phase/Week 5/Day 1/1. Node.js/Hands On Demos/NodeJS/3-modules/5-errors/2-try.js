const fs = require("fs");

const files = ["./1-loop.js", ".zzz.js", "./2-try.js"];

files.forEach((file) => {
  try {
    const data = fs.readFileSync(file, "utf-42");
    // const data = fs.readFileSync(file, "utf-8");
    // const data = fs.readFileSync(file);
    console.log("File data is", data);
  } catch (err) {
    // console.log(err.message);
    // console.log("File not found");
    console.log("Something went wrong and we are going to ignore it");
  }
});
