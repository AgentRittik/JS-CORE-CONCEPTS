

function blocking_for_loop(){
    for(let i=0; i<1000000000; i++){};
}

console.log("Start of the file");
setTimeout(function timer1(){
    console.log("Timer1 done");
},0);

blocking_for_loop();

let x = Promise.resolve("rittik's promsie 1");;

x.then(function processPromise(value){
    console.log("whose Prmoise ? ",value);
    blocking_for_loop();
});
let y = Promise.resolve("rittik's Promise 2");

y.then(function processPromise(value){
    console.log("whose Prmoise ? ",value);
    setTimeout(function (){console.log("Ok done ")},0);
})

let z = Promise.resolve("rittik's Promise 3");

z.then(function processPromise(value){
    console.log("whose Prmoise ? ",value);
});

setTimeout(function(){
    console.log("Timer2 done");
},0);

console.log("end of the file");