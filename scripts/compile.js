const fs = require('fs');
const config = require('./dist/main.js');
console.log(config)

fs.writeFile(
  'susustyle.json',
  JSON.stringify(config,null,2),
  'utf8'
);