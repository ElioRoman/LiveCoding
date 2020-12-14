// input: array, function
// output: array

// callback 
// input: number, num (index - optional), array (optional)
// output: number

// algo:
// 1. iterate array
// 2. apply callback function for every element

const mapArrayElements = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  };

// test func
const testArray = [5, 6, 10, -2, 44, 5];

const testCallback = (el, index, arr) => el * el;

const result = mapArrayElements(testArray, testCallback);
console.log(result);