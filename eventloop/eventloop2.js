setImmediate(()=> console.log("set immidiate"));
setTimeout(() => console.log("timer experired"),0);

Promise.resolve().then(()=> console.log("promise"));

process.nextTick(() => {
    // process.nextTick(() => {
    //     console.log("inner nexttick");
    // })

    Promise.resolve().then(()=> console.log("inner promises"));
    console.log("outer nexttick");
})

