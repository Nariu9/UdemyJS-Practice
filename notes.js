'use strict';

const arr = [1, 2, 3, 6, 8];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}