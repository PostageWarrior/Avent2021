import { once } from 'events';
import {readFileSync, promises as fsPromises} from 'fs';
import internal from 'stream';

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    function power(arr){
        function getGamma(arr){
            let newNum = [];
            for(var p = 0; p < length; p++){
                let oneCount = 0;
                let zeroCount = 0;
                for(var i = 0; i < arr.length; i++){
                    let split = arr[i].split("");

                    if (split[p] == 0){
                        zeroCount++;
                    }
                    else if (split[p] == 1){
                        oneCount++;
                    }
                }
                if (zeroCount > oneCount){
                    newNum.push(0);
                }
                else {
                    newNum.push(1);
                }
            }
            return newNum;
        }

        function getEpsilon(arr){
            let newNum = [];
            for(var p = 0; p < length; p++){
                let oneCount = 0;
                let zeroCount = 0;
                for(var i = 0; i < arr.length; i++){
                    let split = arr[i].split("");

                    if (split[p] == 0){
                        zeroCount++;
                    }
                    else if (split[p] == 1){
                        oneCount++;
                    }
                }
                if (zeroCount < oneCount){
                    newNum.push(0);
                }
                else {
                    newNum.push(1);
                }
            }
            return newNum;
        }

        var gamma = [];
        var epsilon = [];
        var length = arr[0].split("").length;

        gamma = getGamma(arr);
        epsilon = getEpsilon(arr);

        var gammaStr = "";
        var epsilonStr = "";

        for(var i = 0; i< gamma.length; i++){
            gammaStr = gammaStr + gamma[i];
            epsilonStr = epsilonStr + epsilon[i];
        }

        return parseInt(gammaStr, 2) * parseInt(epsilonStr, 2);
    }

    function support(arr){
        var length = arr[0].split("").length;

        function oxygen(arr){
            let values = [...arr];
            for(var p = 0; p < length; p++){
                let oneCount = 0;
                let zeroCount = 0;
                for(var i = 0; i < values.length; i++){
                    let split = values[i].split("");

                    if (split[p] == 0){
                        zeroCount++;
                    }
                    else if (split[p] == 1){
                        oneCount++;
                    }
                }

                if (values.length == 1){
                    return values[0];
                }

                if (zeroCount > oneCount){
                    for(var i = 0; i < values.length; i++){
                        let split = values[i].split("");
                        if (split[p] == 1){
                            values.splice(i, 1);
                            i--;
                        }
                    }
                }
                else {
                    for(var i = 0; i < values.length; i++){
                        let split = values[i].split("");
                        if (split[p] == 0){
                            values.splice(i, 1);
                            i--;
                        }
                    }
                }
            }
            return values[0];
        }

        function CO2(arr){
            let values = [...arr];
            for(var p = 0; p < length; p++){
                let oneCount = 0;
                let zeroCount = 0;
                for(var i = 0; i < values.length; i++){
                    let split = values[i].split("");

                    if (split[p] == 0){
                        zeroCount++;
                    }
                    else if (split[p] == 1){
                        oneCount++;
                    }
                }

                if (values.length == 1){
                    return values[0];
                }

                if (zeroCount > oneCount){
                    for(var i = 0; i < values.length; i++){
                        let split = values[i].split("");
                        if (split[p] == 0){
                            values.splice(i, 1);
                            i--;
                        }
                    }
                }
                else {
                    for(var i = 0; i < values.length; i++){
                        let split = values[i].split("");
                        if (split[p] == 1){
                            values.splice(i, 1);
                            i--;
                        }
                    }
                }
            }
            return values[0];
        }

        var oxyValue = oxygen(arr);
        var CO2Value = CO2(arr);

        return parseInt(oxyValue, 2) * parseInt(CO2Value, 2);;
    }

    var result = support(arr);

    return result;
  }

  console.log("Result: " + syncReadFile('./Day3Data.txt'));
