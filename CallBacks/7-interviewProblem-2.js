

console.log("hello world");

setTimeout(function exec(){
    console.log("Timer done");
}, 0);

for(let i =0 ; i<10000000000 ; i++){ //  taking 10s  -> this is native js code swe block here and stuck here for 10s 
    // do something 
}

console.log("End");