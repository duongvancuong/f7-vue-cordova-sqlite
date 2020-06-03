const fs = require('fs'); // Node.js: extra methods for the fs object like copy(), remove(), mkdirs()
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
console.log(appDirectory)
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  dotenv: resolvePath('.env'),
  publicPath: resolvePath('/'),
};
