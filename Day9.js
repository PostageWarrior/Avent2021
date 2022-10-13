import {readFileSync, promises as fsPromises} from 'fs';

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  let top = [];
  let current = [];
  let bottom = [];

  for (var i = 0; i < arr.length; i++){
    if (i === 0){
        currentLine
    }
  }

  function firstLine()

  return 0;
}

console.log(syncReadFile('./Day9Data.txt'));