let arr = [2, 8, 10, 58, 75, 13, 87, 3, 21];
function sortArr(arr) {
  let sortedArr = arr.toSorted((a, b) => b - a);
  return sortedArr;
}
let result = sortArr(arr);
console.log(result);

function removeDouble(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let foundArr2 = false;

    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        foundArr2 = true;
      }
    }

    let exitAlready = false;

    for (let k = 0; k < result.length; k++) {
      if (result[k] === arr1[i]) {
        exitAlready = true;
        break;
      }
    }

    if (foundArr2 && !exitAlready) {
      result.push(arr1[i]);
    }
  }
  return result;
}
console.log(removeDouble([1, 2, 4, 6], [2, 3, 4]));

//
//
function removeAndCount(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
      arr[i] = arr[arr.length - 1];
      arr.pop();
      i--;
    }
  }

  return count;
}

let myArr = [2, 5, 8, 5, 10, 5];
let targetNum = 5;

let occurrences = removeAndCount(myArr, targetNum);

console.log(occurrences);
console.log(myArr);
//
//

let str = (string) => {
  if (string.length > 5) {
    return true;
  } else {
    return false;
  }
};
console.log(str("benjamin"));

//
//
let cheack = (string) => {
  let firstSt = string[0];
  let lastIndex = string.length - 1;
  let lastChar = string[lastIndex];

  if (firstSt === lastChar) {
    console.log("the first and last index are the same  ");
  } else {
    console.log("the are not the same");
  }
};

cheack("benjt");
