
/***
 *       [ what happen if we pass multiple values to resolve or  reject function]
 * 
 *      IT always gonnna take the first argument passed as a value 
 * 
 *      reject(1,2,3) -> value -> 1
 *      reslove(12 ,11, 13) -> value -> 12
 * 
 *      if we want multiples vakue we can send an array
 * 
 *      reslove([1,2,3]) ->value -> [1,2,3]
 */


// function to  create a random number

function getRandomNumber(max){
    return Math.floor(Math.random()*max);
}

// promise for sync task
function createPromiseWithLoop(){
    return new Promise(function executor(resolve , reject){
        for(let i = 0 ; i <10000000000 ; i++);
        let num = getRandomNumber(10);
        if(num%2 == 0){
            resolve(num);
        }
        else{
            reject(num);
        }
    })
}

// Promise for  async task

function createPromiseWithTimeOut(){
    return new Promise(function executor(resolve , reject){

        // here the code or creation of promise obj is  done synchronously but we are resolving the promise asynchronously
        setTimeout(()=> {
            let num = getRandomNumber(10);
            if(num%2 == 0){
                resolve(num);
            }
            else{
                reject(num);
            }
        },5000);
    })
}

let x = createPromiseWithLoop(); // As the promise are synchronoous this will be handled synchronously

console.log(x); /// this will wait till the for loop runs and will log when promise  will be  either fulfilled or  rejected 

let y = createPromiseWithTimeOut();
console.log(y); // here we immmediately printing and the resolving is done async -> to we will get pending

setTimeout(()=> {
    console.log(y);
},10000);
