//input: array, function
//output: array

//function "callback"
//input: number(el), number (index - option), array (optional)
//output: boolean

//algo:
//1. iterate array +++
//2. apply callback function for every element
//3. if calback return true - add element to result

// const filterArray = (arr, callback) => {
    //put you code here
//     const result = [];
//     for (let i=0; i < arr.length; i++){
//         const fitsCondition = callback(arr[i], i, arr);

//         if (fitsCondition){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// };

//final solution
const filterArray = (arr, callback) => {
const result = [];
for (let i=0; i < arr.length; i++){
    if (callback(arr[i], i, arr)){
        result.push(arr[i]);
    }
}
return result;
};

// test func
const testArray = [5,6,10,-2,44,5];
const testCallback = (el, index, arr) => index > 3;

const res = filterArray (testArray, testCallback);
console.log(res);