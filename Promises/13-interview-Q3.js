
console.log("start of the file");

setTimeout(function timer1(){
    console.log("Timer1 done");
},0);

for(let i =0 ; i<100000000; i++){}

let x = Promise.resolve("rittik sharma");;

x.then(function processPromise(value){
    console.log("whose Prmoise ? ",value);
});
setTimeout(function timer2(){
    console.log("timer2 done");
},0);

console.log("end of the file ");