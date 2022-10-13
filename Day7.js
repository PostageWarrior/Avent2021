import {readFileSync, promises as fsPromises} from 'fs';

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  let split = arr[0].split(',');
  let data = [];
  
  for (var i = 0; i < split.length; i++){
    data.push(Number(split[i]));
  }

  let lowest = (function findLowest(nums) {
    let lowest = 0;
    for (var i = 0; i < nums.length; i++){
        if (nums[i] < lowest){
            lowest = nums[i];
        }
    }
    return lowest;
  })(data);

  let highest = (function findHighest(nums) {
    let highest = 0;
    for (var i = 0; i < nums.length; i++){
        if (nums[i] > highest){
            highest = nums[i];
        }
    }
    return highest;
  })(data);

  console.log(lowest + " - " + highest);  

  function Calculate(position, nums) {
    let fuel = 0;
    for (var n = 0; n < nums.length; n++){
        let steps = 0;
        if (nums[n] - position < 0){
            steps = (nums[n] - position) * -1;
            for (var i = 0; i < steps; i++){
                fuel += i + 1;
            }
        }
        else if (nums[n] - position > 0){
            steps = nums[n] - position;
            for (var i = 0; i < steps; i++){
                fuel += i + 1;
            }
        }
        else {
            // Do nothing
        }
    }
    return fuel;
  }  

  let lowestFuel = 0;
  for (var i = lowest; i < highest; i++){
    let currentFuel = 0;
    currentFuel = Calculate(i, data);
    if (lowestFuel === 0){
        lowestFuel = currentFuel;
    }
    else if (currentFuel < lowestFuel){
        lowestFuel = currentFuel;
    }
    else {
        // Do nothing
    }
  }

  return lowestFuel;
}

console.log(syncReadFile('./Day7Data.txt'));