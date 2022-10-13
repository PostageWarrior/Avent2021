import { countReset } from 'console';
import {readFileSync, promises as fsPromises} from 'fs';

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  function loop(arr){
    var increases = 0;

    function compare(num1, num2){
      return num1 < num2;
    }
    // Regular loop; Part 1
    for(var i = 0; i < arr.length; i++){
        if (compare(Number(arr[i]), Number(arr[i + 1]))){
            increases++;
        }
    }

    // Window loop; Part 2
    // for(var i = 0; i < arr.length; i++){
    //   if (i >= (arr.length - 2)){
    //     break;
    //   }
    //   if (compare((Number(arr[i]) + Number(arr[i + 1]) + Number(arr[i + 2])), (Number(arr[i + 1]) + Number(arr[i + 2]) + Number(arr[i + 3])))){
    //     increases++;
    //   }
    // }

    return increases;
  }

  var count = loop(arr);

  return count;
}

console.log("This is the amount of increases: " + syncReadFile('./Day1Data.txt'));