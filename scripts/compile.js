const fs = require('fs-extra');
const config = require('./dist/main.js');

fs.outputFile(
  'config/susustyle.json',
  JSON.stringify(config),
  'utf8'
);