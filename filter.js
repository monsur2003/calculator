const array = [5, 5, 34, 23, 46, 23, 12, 23];
const reduce1 = [1, 2, 3, 4, 5, 6];
const result = reduce1.reduce((previous, current) => previous + current, 0);
console.log(result);

const numberArray = [20, 34, 234, 2435, 234, 23, 3, 4, 234, 4];
const largesNumber = numberArray.filter((number) => number < 30);

console.log(largesNumber);

// const alloFMyfriends = ['titu ','monsur','kaium', 'ashik', 'sakib al hasan','jahangir'];
// const largestName = alloFMyfriends.filter(largest=>(largest>alloFMyfriends.length))
// // console.log(largestName)

const alloFMyfriends = [
  "titu",
  "monsur",
  "kaium",
  "ashik",
  "sakib al hasan",
  "jahangir",
];
const largestName = alloFMyfriends.reduce((a, b) =>
  a.length > b.length ? a : b
);
console.log(largestName);

// const largestArray = [50,34,23,213,45,456,3234,2,3,4,5,32];
// const  largestNumber = Math.max(largestArray);
// console.log(largesNumber)

const findOne = [30, 23, 213, 23445, 3, 45, 5, 6, 54, 3, 2, 32, 345];
const one = findOne.find((number) => number > 40);
// console.log(one)
const nmberArray = [10, 50, 234, 2, 3, 4, 54];
const a = nmberArray.find((a) => a <= 10);
console.log(a);

const pr1 = [1, 3, 5, 7, 9];
const evenPr = pr1.map((number) => number + 1);
console.log(evenPr);

// You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
// return/get all the elements which are divisible by 10 using
// array.filter() method.

const givenArr = [33, 50, 79, 78, 90, 101, 30];
const divisible = givenArr.filter((number) => number % 10 == 0);
console.log(divisible);
