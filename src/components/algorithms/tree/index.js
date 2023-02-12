// https://github.com/trekhleb/javascript-algorithms/blob/master/README.es-ES.md

//https://the-algorithms.com/

const testFolder = '.';

import fs from 'fs'

// const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});