function getRandomNumber(max){
    return Math.floor(Math.random()*max);
}

// promise for sync task
function createPromiseWithTimeOut(){
    return new Promise(function executor(resolve , reject){

        // here the code or creation of promise obj is  done synchronously but we are resolving the promise asynchronously
        setTimeout(()=> {
            let num = getRandomNumber(10);
            if(num%2 == 0){
                // resolve(num);
                console.log("fulfilling");
                return num;
            }
            else{
                // reject(num);
                console.log("rejeccting");
                return num;
            }
        },5000);
    })
}

let x = createPromiseWithTimeOut(); //   the state of the promise will always remains Pending
                                    //   as we are nit using the either resolve or reject 
                                    //  the  state of promise will only change if we call resolve or reject 
                                    // here the return the we don't excute the function further


/****
 *    Any piece of code  that we write after resolve / reject will be executed normally
 * 
 */

function createPromiseExample(){
    return new Promise(function executor(resolve , reject){

        // here the code or creation of promise obj is  done synchronously but we are resolving the promise asynchronously
        setTimeout(()=> {
            let num = getRandomNumber(10);
            if(num%2 == 0){
                console.log("before");
                resolve(num);
                console.log("After");
                return num;
            }
            else{
                console.log("before");
                reject(num);
                console.log("after");
                return num;
            }
        },5000);
    })
}

let y = createPromiseExample(); // in this case the before and after will be printed and code executionn done normally


/***
 *          [if we call the resolve or reject 2 times what happens  ]
 *          
 *          ->> whatever value we called first it going to only conside that 
 * 
 *          [,] -> ONCE YOU resolve/ reject THE PROMISE OBJECT -> THEN AFTER IT [NO MATTER HOW MANY TIME YOU CALL THE reolve/ reject ->there  will be no  effect]
 */


function createPromiseExample(){
    return new Promise(function executor(resolve , reject){

        // here the code or creation of promise obj is  done synchronously but we are resolving the promise asynchronously
        setTimeout(()=> {
            let num = getRandomNumber(10);
            if(num%2 == 0){
                console.log("before");
                resolve(num);       /// only this value will be considered
                console.log("After");
                resolve(10);
                resolve(20);
                return num;
            }
            else{
                console.log("before");
                reject(num);         // only this is going to be considered
                console.log("after");
                reject(10);
                reject(20); 
                return num;
            }
        },5000);
    })
}