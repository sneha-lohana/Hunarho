function loadScript(url){
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = url;
        script.onerror = () => reject(new Error("Error in loading script file"));
        script.onload = () => resolve(script);
        document.head.append(script);
    })
};
loadScript("./main1.js")
.then(value => {
    console.log(value.src + " successfully loaded");
    return loadScript("./main2.js")
})
.then(value => {
    console.log(value.src + " successfully loaded");
    sayHi();
    return loadScript("./main3.js")
})
.catch(error => {
    console.log(error);
})

// const egg = new Promise((resolve, reject) => {
//     console.log("Execution started!");

//     // Success - resolve()
//     // Failure - reject()

//     resolve("Chicken successfully hatched!")
//     // reject(new Error("Egg Broken!"));
// });

// egg.then(value => {
//     console.log(value);
// })
// .catch(error => { console.log(error);
// })
// .finally(()=> {
//     console.log("CleanUP the shells");
// });

// console.log("Done!");
