//require("./xyz.js");
// const {sum, x}=require("./calculation/sum.js");
// import {sum, x} from "./sum.js"
// const {multiply} = require("./calculation/multiply.js")
// const {divide} = require('./calculation/divide.js')
const {sum,multiply,divide} = require("./calculation/index.js");
const data = require('./data.json');
console.log(JSON.stringify(data));

console.log(globalThis == global);
var a = 10;
var b =5;
sum(a , b);
multiply(a,b);
divide(a,b);

// console.log(x);