const fs = require("fs");
const a =100;
setImmediate(() => console.log("set Immediate"));

Promise.resolve().then(()=> console.log("Promise"));

fs.readFile("./file.txt", "utf-8",() => {
    console.log("file read CB");
});

setTimeout(() => console.log("timer is experired"),0);

process.nextTick(() => console.log("process.nextTick"));

function printA() {
    console.log(a);
}

printA();

console.log("last line of a code");