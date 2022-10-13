import {readFileSync, promises as fsPromises} from 'fs';
function performChecks(test){
    // Row Checks
    if (test[0] == "" && test[1] == "" && test[2] == "" && test[3] == "" && test[4] == ""){
        return "Winner";
    }
    else if (test[5] == "" && test[6] == "" && test[7] == "" && test[8] == "" && test[9] == ""){
        return "Winner";
    }
    else if (test[10] == "" && test[11] == "" && test[12] == "" && test[13] == "" && test[14] == ""){
        return "Winner";
    }
    else if (test[15] == "" && test[16] == "" && test[17] == "" && test[18] == "" && test[19] == ""){
        return "Winner";
    }
    else if (test[20] == "" && test[21] == "" && test[22] == "" && test[23] == "" && test[24] == ""){
        return "Winner";
    }

    // Column Checks
    if (test[0] == "" && test[5] == "" && test[10] == "" && test[15] == "" && test[20] == ""){
        return "Winner";
    }
    else if (test[1] == "" && test[6] == "" && test[11] == "" && test[16] == "" && test[21] == ""){
        return "Winner";
    }
    else if (test[2] == "" && test[7] == "" && test[12] == "" && test[17] == "" && test[22] == ""){
        return "Winner";
    }
    else if (test[3] == "" && test[8] == "" && test[13] == "" && test[18] == "" && test[23] == ""){
        return "Winner";
    }
    else if (test[4] == "" && test[9] == "" && test[14] == "" && test[19] == "" && test[24] == ""){
        return "Winner";
    }
  }

  function calculateResults(currentNum, search){
    let sum = 0;
    let winningNumbers = [...search].filter(n => n);
    for (var i = 0; i < winningNumbers.length; i++){
        sum += Number(winningNumbers[i]);
    }
    return sum * Number(currentNum);
  }

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  var numbers = arr[0].split(",");

  var boards = [];
  var copy = [...arr];
  copy.splice(0, 2);
  
  for (var i = 0; i < copy.length; i++){
    let str = copy[i] + " " + copy[i + 1] + " " + copy[i + 2] + " " + copy[i + 3] + " " + copy[i + 4];
    boards.push(str.split(" ").filter(n => n));
    copy.splice(0, 6);
    i--;
  }

  var results = "";
for (var n = 0; n < numbers.length; n++){
    let currentNum = numbers[n];
    for (var i = 0; i < boards.length; i++){
        let search = boards[i];
        if (search.includes(String(currentNum))){
            let index = search.indexOf(String(currentNum));
            search[index] = "";
            results = performChecks(search);
            if (results != undefined){
                return calculateResults(currentNum, search);
            }
        }
    }
}
  
  return results;
}

console.log("Result: " + syncReadFile('./Day4Data.txt'));