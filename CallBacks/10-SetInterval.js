
/**
 *          Discussion arouns the setInterval
 *          
 *          IN Browser
 *           the setInterval function will going to return a intervalnID - >to uniquely identify the particular SetInterval
 * 
 *          In Node  Runtime
 *              the SetInterval is going to return us object
 */



let x = setInterval(()=> {
    console.log("interval 1");
},1000);

let y = setInterval(()=> {
    console.log("interval 2");
}, 500);

console.log(x);
// for(let i = 1 ; i<10000000000 ; i++){

// }

// clearInterval(x);  -> this is not the function in the node 
for(let i = 1 ; i<10000000000 ; i++){

}
clearInetrval(y);


