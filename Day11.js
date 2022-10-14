import { countReset } from 'console';
import {readFileSync, promises as fsPromises} from 'fs';

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  let data = [];
  for (var i = 0; i < arr.length; i++){
    let line = arr[i].split("");
    for (var k = 0; k < line.length; k++){
        line[k] = Number(line[k]);
    }
    data[i] = line;
  }

  for (var s = 0; s < 100; s++){
    addEnergy();
  }

  function addEnergy(){
    for (var i = 0; i < data.length; i++){
        let line = data[i];
        for (var j = 0; j < line.length; j++){
            line[j]++;
        }
    }
  }

  return data;
}

console.log(syncReadFile('./Day11Data.txt'));