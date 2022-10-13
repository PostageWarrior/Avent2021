import {readFileSync, promises as fsPromises} from 'fs';

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  var testData = arr[0].split(',');

  for (var d = 0; d < 80; d++){
    let additions = [];
    for (var f = 0; f < testData.length; f++){
        if (testData[f] == 0){
            testData[f] = 6;
            additions.push(8);
        }
        else {
            testData[f]--;
        }
    }
    testData = testData.concat(additions);
}

  return testData.length;
}

console.log(syncReadFile('./Day6Data.txt'));