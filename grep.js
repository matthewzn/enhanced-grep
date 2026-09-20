// enhanced-grep : a small node.js version of the unix grep command
// reads a file and prints lines according to search word (case sensitive)
// ran with: node grep.js <search-word> <file>

const fs = require('fs');

const pattern = process.argv[2];
const fileName = process.argv[3];

if (!pattern || !fileName) {
  console.log('Usage: node grep.js <pattern> <filename>');
  return;
}

const content = fs.readFileSync(fileName, 'utf-8');
const lines = content.split('\n');

lines.forEach((line, index) => {
  if (line.toLowerCase().includes(pattern.toLowerCase())) {
    console.log(`${index + 1}: ${line}`);
  }
}});

// node grep.js ERROR sample.log
// node grep.js error sample.log
