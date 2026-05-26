const crypto = require("crypto");
console.log("hellooo...");

var a = 2734894;
var b = 39849;
//pbkdf2  ---> password base key dereative function

crypto.pbkdf2Sync("password","salt", 5000000,50,"sha512");
console.log("first key is generated");


crypto.pbkdf2("password", "salt",50000,50,"sha512", (err, key) => {
    console.log("second key is generated")
    console.log(key);
});

function multiply(x,y) {
    const result = x*y;
    return result;

}

const c = multiply(a,b);
console.log("multiplication is:", c);