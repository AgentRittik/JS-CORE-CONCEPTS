

console.log("hello world");

for(let i = 0 ; i<3 ; i++){
    setTimeout(function exec(){
        console.log("Timer done");
    }, 10);
}


for(let i =0 ; i<10000000000 ; i++){ //  taking 10s  -> this is native js code swe block here and stuck here for 10s 
    // do something 
}

console.log("End");