

function timeCounsumingByLoop(){
    console.log("loop Starts");
    for(let  i = 0 ; i<1000000000 ; i++){
        //do something
    }
    console.log("loops ends");
}

function timeConsumingByRuntime(){
    console.log("runtime starts");
    setTimeout(()=>{
        console.log("completed the timer");
    }, 5000);

}

console.log("hi");

timeCounsumingByLoop();
timeConsumingByRuntime();
timeCounsumingByLoop();


console.log("by");


/**
 * 
 *    at line no 19 -> hi will be printed
 *   -> at line 21 we enter the timeCounsumingByLoop() function in the callstack
 * 
 *          |                     |
 *          |                     |
 *          |                     |
 *          |                     |
 *          |                     |
 *          |                     |
 *          |timeCounsumingByLoop |   -> we print the start -> forloop runs -> print end 
 *          |                     |
 *          |    Global function  |
 *          |_____________________|      
 *          
 * 
            After complete execution of the function the it will removed from the callsatack
            
            ->now the control reaches to line -> 22 and we enter new funntion to the function stack
 * 
 *          |                       |                           __________________________________________________________________
 *          |                       |                          |
 *          |                       |                          |   ()=>{conslole.log("completed the timer")}   ==> timer[5sec]
 *          |                       |                          |__________________________________________________________________
 *          |                       |                                                 EVENT QUEUE
 *          |                       |                                  
 *          |timeCounsumingByRuntime|   -> we print the [runtime starts]  -> then we have the async code so we send it to the node runtime to execute and  
 *          |                       |                                        comntinue our code execution
 *          |    Global function    |                                     -> after this this fns is also removed form the call stack
 *          |_______________________|   
 * 
 * 
 * 
 *          |                       |
 *          |                       |
 *          |                       |
 *          |                       |
 *          |                       |
 *          |                       |
 *          |timeCounsumingByRuntime|   -> we print the [runtime starts]  -> then we have the async code so we send it to the node runtime to execute and  
 *          |                       |                                        comntinue our code execution
 *          |    Global function    |                                     -> after this this fns is also removed form the call stack
 *          |_______________________|   
 * 
 *                
 */

