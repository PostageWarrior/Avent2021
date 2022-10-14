import {readFileSync, promises as fsPromises} from 'fs';

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  let sum = 0;
  
  for (var i = 0; i < arr.length; i++){
    if (i === 0){
      sum += firstAndLastLine(arr[i].split(""), arr[i + 1].split(""));
    }
    else if (i === arr.length - 1){
      sum += firstAndLastLine(arr[i].split(""), arr[i - 1].split(""));
    }
    else {
      sum += regularLine(arr[i - 1].split(""), arr[i].split(""), arr[i + 1].split(""));
    }
  }

  function firstAndLastLine(current, other){
    let sum = 0;
    for (var i = 0; i < current.length; i++){
      if (i === 0){
        if ((Number(current[i]) < Number(current[i + 1])) && (Number(current[i]) < Number(other[i]))){
          sum += Number(current[i]) + 1;
        }
      }
      else if (i === current.length - 1){
        if ((Number(current[i]) < Number(current[i - 1])) && (Number(current[i]) < Number(other[i]))){
          sum += Number(current[i]) + 1;
        }
      }
      else{
        if ((Number(current[i]) < Number(current[i - 1])) && (Number(current[i]) < Number(current[i + 1])) && (Number(current[i]) < Number(other[i]))){
          sum += Number(current[i]) + 1;
        }
      }
    }
    return sum;
  }

  function regularLine(top, middle, bottom){
    let sum = 0;
    for (var i = 0; i < middle.length; i++){
      if (i === 0){
        if ((Number(middle[i]) < Number(middle[i + 1])) && (Number(middle[i]) < Number(top[i])) && (Number(middle[i]) < Number(bottom[i]))){
          sum += Number(middle[i]) + 1;
        }
      }
      else if (i === middle.length - 1){
        if ((Number(middle[i]) < Number(middle[i - 1])) && (Number(middle[i]) < Number(top[i])) && (Number(middle[i]) < Number(bottom[i]))){
          sum += Number(middle[i]) + 1;
        }
      }
      else {
        if ((Number(middle[i]) < Number(middle[i + 1])) && (Number(middle[i]) < Number(middle[i - 1])) && (Number(middle[i]) < Number(top[i])) && (Number(middle[i]) < Number(bottom[i]))){
          sum += Number(middle[i]) + 1;
        }
      }
    }
    return sum;
  }

  return sum;
}

console.log(syncReadFile('./Day9Data.txt'));