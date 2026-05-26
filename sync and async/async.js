
const fs = require("fs");
const https = require("https");

console.log("hello World");
var a = 187239;
var b= 2738;

https.get("https://dummyjson.com/products/1", (res,data) => {
    console.log("fetched data",data);
    
});

setTimeout(() => {
    console.log("timeout for 5 sec")
},5000);


fs.readFile("./file.txt","Utf8",(err,data) => {
    console.log("file data :" , data)
});



function multiply(x,y) {
    const result = x*y;
    return result;
}

var c = multiply(a,b);
console.log(c);
