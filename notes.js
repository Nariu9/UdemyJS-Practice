'use strict';

const arr = [1220, 20, 35, 63, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// // for (let value of arr) {
// //     console.log(value);
// // }

// arr.forEach((item, i, arr) => {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));