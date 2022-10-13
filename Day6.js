import {readFileSync, promises as fsPromises} from 'fs';

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  var testData = arr[0].split(',');

  function Calculate(arr) {
    let temp = [...arr];
    for (var d = 0; d < 256; d++){
      let additions = [];
      for (var f = 0; f < temp.length; f++){
          if (temp[f] == 0){
            temp[f] = 6;
            additions.push(8);
          }
          else {
            temp[f]--;
          }
      }
      if (additions.length > 0){
        console.log(additions.length);
        temp = temp.concat(additions);
      }
    }
    return temp.length;
  }

  var count = 0;
  var slice = testData.length / 100;
  for (var i = 0; i < 10; i++){
    var temp = testData.slice(i * slice, (i * slice) + slice);
    count += Calculate(temp);
  }  

  return count;
}

console.log(syncReadFile('./Day6Data.txt'));