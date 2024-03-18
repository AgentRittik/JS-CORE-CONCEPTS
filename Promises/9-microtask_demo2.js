

function createPromise(){

    return new Promise(function exec(resolve , reject){
        setTimeout(()=>{
        console.log("rejecting the promise");                     // This promise got immediately resolved.
        reject("rejection Done");
        }, 1000);
    });
}

setTimeout(function process(){
    console.log("timer completed "); // this times will also got immediately resolved.
},0);


let p = createPromise();

p.then(function fulfilmentHandler(value){
        console.log("we fulfilled the value ", value);
    },
    function rejectionHandler(value){
        console.log("rejected the promise 1", value);
    }
)
p.then(function fulfilmentHandler1(value){
    console.log("we fulfilled the value 2 ", value);
},
function rejectionHandler(value){
    console.log("rejected the promise 2", value);

}
)
p.then(function fulfilmentHandler3(value){
    console.log("we fulfilled the value 3 ", value);
},
function rejectionHandler(value){
    console.log("rejected the promise 3", value);
}
)
for(let i = 0 ; i<10000000; i++){}
console.log("ending");