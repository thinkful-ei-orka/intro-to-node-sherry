const fs = require('fs');
const path = require('path');

const source = process.argv[2];
const target = process.argv[3];

// read contents of source
const contentsOfSource = fs.readFileSync(source, 'utf-8');

// get lines of source into an array, remove empty lines
const linesInSource = contentsOfSource.split('\n').filter(Boolean);

// make the target dir if it doesn't exist
if (!fs.existsSync(target)) {
  fs.mkdirSync(target);
}

// iterate over the lines
linesInSource.forEach(line => {
  // get the content of the lines, first word is a filename, rest is content
  const [ filename, ...contentArr ] = line.split(' ');
  // construct the full path for the file to create
  const newFilePath = path.join(__dirname, target, filename);

  // write the file and it's contents
  fs.writeFileSync(
    newFilePath,
    contentArr.join(' '),
    { flag: 'w+', encoding: 'utf-8' }
  );
});

/**
 * I used the debugger to step through each line of code,
 * paying special attention to all the variables created
 * and changed made as each line was processed. Seeing
 * that the spaces were taken away from line, and
 * placed in an array that then needed to be put back
 * together with spaces to appear appropriate for
 * human eyes. I hope that makes sense - I am super
 * tired and having trouble with the words right now.
 * All the words. All of them.
 */