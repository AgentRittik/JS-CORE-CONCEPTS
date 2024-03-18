/**
 * We can atttach the functionality to the promise once the promise is fulfilled or rejected.
 * 
 *  .then =>  with promised we can attach the .then handles which can accept two handler functions which ew ahvr to implement.
 * 
 *                  => .then (fulfillmentHandler , rejectionHandler)
 */
function getRandomNumber(max){
    return Math.floor(Math.random()*max);
}
const createPromiseTimeout = (max)=>{
    return new Promise(function executor(resolve , reject) { 
        console.log("Inside the Promise");
        setTimeout(function executor(){
            let num  = getRandomNumber(max);

            if(num%2 == 0){
                resolve(num);
            }
            else{
                reject(num);
            }
        }, 10000)
        console.log("lefting the promise body");
    });
}

console.log("starting");
const p = createPromiseTimeout(9);
console.log("we are waiting for promise to resolve");
console.log("currently my promise object is like ",p);  


p.
 then(
    function fulfillmentHandler(value){
        console.log("resolved Sucessfully", value);
        console.log("promise after fulfillment", p);
    },
    function rejectionHandler(value){
        console.log("rejected", value);
        console.log("promise after rejection", p);
    }
)


/**
 *      Besides the value and state properties the Promise object also hava other properties
 *      
 *      PROMISE{
 *                 STATE : 
 *                 VALUE :
 *                 onFULFILLMENT : [fn1 , fn2] =>  this is the fulfillment array it will conatians the fn to be execute when the promise got fulfilled. 
 *                 onREJECTION :   [gn1 , gn2] => this is the rejection array it will conatians the fn to be execute when the promise got Rejected.
 *             }
 * 
 *      fn1, fn2 => are the fulfillment functions that we attached to the .then
 *    
 *      gn1 , gn2 => are the rejection functions that we attached to the .then
 */

/***
 * 
 *    ********************* WHAT DOES [.then ] DO ****************************
 * 
 *    ->> the .then registers these {fulfilment, rejection } handlers for your promise object.
 * 
 *    --> .then is just the register -> it is not  like that the .then is executed only  when the promise is executed or rejected.
 *        -> 
 * 
 *  
 *   ******************Most important part about these function is that :  **********
 *      The scope  of these function are done at parsing phase but
 *      [these functions are only executed when the promise state changes] -> the registration of these functions are done at execution phase.      
 */