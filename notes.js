'use strict';
let num = 20;

function printNum() {
    console.log('Some text');
    let num = 100;
    return;
    console.log('Unreachable code');
}
printNum();
console.log(num);