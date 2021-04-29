'use strict';

// // let a = 5,
// //     b = 5;
// // b = b + 4;
// // console.log(a); //5
// // console.log(b); //9

// // const obj = {
// //     a: 5,
// //     b: 1
// // };
// // const copy = obj;
// // copy.a = 10;
// // console.log(copy);
// // console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
// const numbersCopy = copy(numbers);
// numbersCopy.a = 10;
// numbersCopy.c.x = 10;
// console.log(numbersCopy);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };
// const clone = Object.assign({}, add);
// clone.d = 23;
// console.log(add); // { d: 17, e: 20 }
// console.log(clone); // { d: 23, e: 20 }

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[1] = 'q';
// console.log(oldArray);  //[ 'a', 'b', 'c' ]
// console.log(newArray);  //[ 'a', 'q', 'c' ]

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);

const array = ['a', 'b', 'c'];
const arr = [...array];
arr[0] = 'www';
console.log(array); //[ 'a', 'b', 'c' ]
console.log(arr); //[ 'www', 'b', 'c' ]

const obj1 = {
    one: 1,
    two: 2,
    three: 3
};
const obj2 = {...obj1 };
obj2.one = 4;
console.log(obj1); //{ one: 1, two: 2, three: 3 }
console.log(obj2); //{ one: 4, two: 2, three: 3 }