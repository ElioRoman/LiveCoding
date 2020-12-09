//how to work on tech tasks. Step by step guide

//1. learn requirement
//2. create step by step algo (& input/output for function)
//3. write draft solution & testing
//4. refactoring & final testing -> final solution


//algo
//1. iterate numbers from 1 to n
//2. check is NUM is prime or not
//2.1 iterate numbers from 2 to n-1
//2.2 ... 

//input: number
//output: boolean
function isPrime(num){
    for(let i=2; i<num; i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
//input: number
//output: undefined
function getPrime (n){
    for (let i=2; i<=n; i++){
        const chekifPrime = isPrime(i);
        if (isPrime(i)){
            console.log(i);
        }
    }
}

// test function
//getPrime(7);
//getPrime(9);
