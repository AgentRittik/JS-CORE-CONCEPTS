/**
 *    Due to feature of eventloop the JS become the non blocking for the runtime features .
 *    But still it is blocking for its native code 
 */


function timeCounsumingByLoop(){
    console.log("loop Starts");
    for(let  i = 0 ; i<10000000000 ; i++){
        //do something
    }
    console.log("loops ends");
}

function timeConsumingByRuntime0(){
    console.log("runtime starts");
    setTimeout(function exec0(){
        console.log("completed the timer0");
        for(let i = 0 ; i<10000000000 ; i++){
            //do something
        }
    }, 5000);  // 5sec timer

}
function timeConsumingByRuntime1(){
    console.log("runtime starts");
    setTimeout(function exec1(){
        console.log("completed the timer1");
    }, 0);  // 0sec timer

}
function timeConsumingByRuntime2(){
    console.log("runtime starts");
    setTimeout(function exec2(){
        console.log("completed the timer2");
    }, 200);  // 2sec timer

}

console.log("hi");

timeCounsumingByLoop();
timeConsumingByRuntime0();
timeConsumingByRuntime1();
timeConsumingByRuntime2();

timeCounsumingByLoop();


console.log("by");

/**
 *   hi 
 *   loop starts
 *   loop ends
 *   runtime starts     [runtime0 - > async call of 5 sec]
 *   runtime starts     [runtime1 - > async call of 0 sec]   -> 0 sec so immediately goes to  the event loop first
 *   runtime starts     [runtime2 - > async call of 2 ms]
 *   loop starts
 *   loop ends
 *   bye                [ here the globla call stack will be empty we push the functions  from the queue]
 * 
 *   exec1() -> completed the timer1
 *   exec2() -> completed the timer2
 *   exec0() -> completed the timer0
 * 
 *           _______________________________________________________________________
 *          |             |              |
 *          |  exec1()    |  exec()2     | exec3()
 *          |_____________|______________|___________________________________________
 *                                  EVENT QUEUE
 * 
 * 
 *          when the global stack is empty the we are gonna pop the function from the queue and put in the main call stack
 * 
 *    Due to this the JS become the non blocking for the runtime features .
 *    But still it is blocking for its native code 
 */