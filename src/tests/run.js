const Mocha = require("mocha");
const fs = require("fs");
const path = require("path");

// Instantiate a Mocha instance.
const mocha = new Mocha({
  reporter: "list"
});

const testDir = path.join(__dirname);
console.log(testDir);

// Add each .js file to the mocha instance
fs.readdirSync(testDir)
  .filter(function(file) {
    // Only keep the .js files
    return file.substr(-3) === ".js";
  })
  .forEach(function(file) {
    mocha.addFile(path.join(testDir, file));
  });

// Run the tests.
mocha.run(function(failures) {
  process.exitCode = failures ? 1 : 0; // exit with non-zero status if there were failures
});
