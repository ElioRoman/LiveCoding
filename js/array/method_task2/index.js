//input: num, num, ...
//output: num
//function multiply(){
    // console.log(arguments);
    // console.log(Object.values(arguments));
//    return Object.values(arguments).reduce((acc, el) => acc * el);
//}

const multiply = (...args) =>{
    
    return args.reduce((acc, el) => acc * el);
};

console.log(multiply(5)); //5
console.log(multiply(5, 10)); //50
multiply(2, 3, 5); //30
multiply(5, 10, 1, 5, 6, 8, 2, 2, 4); //...


//spread
const testArray = [3, 4];
console.log (...testArray);

const testArrayCopy = [...testArray];

function sum (a ,b){
    return a + b;
}

sum(testArray[0], testArray[1]);
sum(...testArray);

let example = 1111;