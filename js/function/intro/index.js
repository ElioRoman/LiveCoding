'use strict';


console.log('hello');

/*
 * ф-ция getSenseOfLife не должна принимать аргументы
 * ф-ция getSenseOfLife должна вернуть число 42
 */

function getSenseofLife(){
    console.log('42');
     return 42;
}

//run func option 1
const res = getSenseofLife ();
console.log (res);

//run func option 2

console.log(getSenseofLife());

/* ф-ция sum должна принимать два числа и вернуть их сумму */

function sum (a,b){
    return a+b;
}

//test func
console.log (sum(10,20));

/*
 * ф-ция sum должна принимать число
 * ф-ция sum должна вывести в консоль строку 'I am 34 years old'
 * где 34 - число, полученное в аргументах
 */

 function sum (a){
     console.log ('I am ' + a + ' years old');
 }
//console.log (sum(34));
sum(34);

/* ======> Arrow functions <======= */

/* ф-ция mult должна принимать два числа и вернуть их произведение */
const mult = (a,b) => {
    return a+b;
}
console.log(mult(30,5));
console.log(mult(30,0));

/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */
// ... code here
const square = num =>{
    return num*num;
}

// const square = num => num*num;

console.log(square(5));

/*
 * ф-ция getMagicNumber не должна принимать аргументы
 * ф-ция getMagicNumber должна вернуть число 17
 */
const getMagicNumber = () => 17;
console.log(getMagicNumber())