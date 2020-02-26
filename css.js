let { parse, stringify } = require('scss-parser');
let createQueryWrapper = require('query-ast');
let fs = require('fs');

fs.readFileSync(filePath, 'utf8').trim();
