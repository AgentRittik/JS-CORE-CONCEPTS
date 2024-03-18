

function createPromise(){

    return new Promise(function exec(resolve , reject){
        console.log("resolving the promise");                     // This promise got immediately resolved.
        resolve("Done");
    });
}

setTimeout(function process(){
    console.log("timer completed "); // this times will also got immediately resolved.
},0);


let p = createPromise();

p.then(function fulfilmentHandler(value){
        console.log("we fulfilled the value ", value);
    },
    function rehjectionHandler(value){

    }
)
p.then(function fulfilmentHandler1(value){
    console.log("we fulfilled the value 2 ", value);
},
function rehjectionHandler(value){

}
)
p.then(function fulfilmentHandler3(value){
    console.log("we fulfilled the value 3 ", value);
},
function rehjectionHandler(value){

}
)
for(let i = 0 ; i < 100000000; i++){};
console.log("ending");

/***
 *     what happens is that when our promise got resolved -> the handlers attached with the promises a
 *     are not immediately invoked.
 *     
 *      What exactly happens is that when promise got fulfilled or rejected the corresponding handler 
 *      go inside the [MICROTASK QUEUE] -> they wait there for event loop to show some signal.
 * 
 *      What is that signal ??
 *      The event loop is  continuously checking weather the call stack is empty or not and the global 
 *      code execution is completed or not. 
 *      
 *      If completed then it will [first ] go to microtask queue and then try to execute whatever is there in the microtask queue.
 * 
 * 
 *              ***********************Note *******************************
 * 
 *          At any point of  time if event loop has a choice to pick from a [microtask/macrotask queue ]
 *          and [Callback queue ] then the event loop always give the priority to the [MicroTask Queue]
 * 
 *         
 *       ******************Hence promises are also non blocking and they doesn't hamper the flow of the code*********************
 */