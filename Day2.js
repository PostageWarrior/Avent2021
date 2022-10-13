import { lookup } from 'dns';
import {readFileSync, promises as fsPromises} from 'fs';

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
  
    const arr = contents.split(/\r?\n/);
  
    function loop(arr){
        var horizontal = 0;
        var depth = 0;
        var aim = 0;

        for(var i = 0; i < arr.length; i++){
            let input = arr[i].split(" ");
            if (input[0] === 'forward'){
                horizontal += Number(input[1]);
                depth += aim * Number(input[1]);
            }
            else if (input[0] === 'down'){
                aim += Number(input[1]);
            }
            else if (input[0] === 'up'){
                aim -= Number(input[1]);
            }
        }

        console.log("Horizontal: " + horizontal + " Depth: " + depth);
        return horizontal * depth;
    }
  
    var position = loop(arr);

    return position;
  }
  
  console.log("Position: " + syncReadFile('./Day2Data.txt'));
  