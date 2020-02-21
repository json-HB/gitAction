const path = require("path");
const fs = require("fs");

fs.readFile(path.resolve("./index.html"), (err, data) => {
  let content = data.toString();
  content = content.replace(/{{([^}]+)}}/g, function(full, extr) {
    return "hello world";
  });
  fs.writeFileSync(path.resolve("./index.html"), content);
  process.exit(0);
});
