console.log("Helloooo");

var a = 384984;
var b = 89304;
// this callback will only be pushed to call stack in v8 once the call stack is empty
setTimeout(()=> {
    console.log("call me right now");
}); // trust issues withj settimeout


setTimeout(() => {
    console.log("call me after 3 second")
},3000);


const multiply = (x,y) => {
    const result = x * y;
    return result
};

const c = multiply(a,b);
console.log("result is:",c );