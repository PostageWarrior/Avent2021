import {readFileSync, promises as fsPromises} from 'fs';

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  var testData = arr[0].split(',');

  for (var d = 0; d < 80; d++){
    for (var f = 0; f < testData.length; f++){
        if (testData[f] == 0){
            testData[f] = 6;
            testData.concat('8');
        }
        else {
            testData[f]--;
        }
    }
}

  return testData;
}

console.log(syncReadFile('./Day6Data.txt'));