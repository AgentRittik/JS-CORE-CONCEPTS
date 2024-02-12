
// settimeout is also a Hof 
setTimeout(function exec(){               //  here the fns is exec is a callback function
    console.log("Running after sometimes");
}, 4000);

// the concepts of callbacks also exist in c++ 

// FUNCTIONS Pointers  -> Using functions pointer we can pass the functions as an argument in c++

/**
 * 
 *  Problems With Callbacks :
 *                            most people says -> Callback Hell
 *                            But this is not the biggest problem of callbacks 
 * 
 *                            people says the problem of callback hell is solved by Promises
 *                            But in Promises there is again a problem of callback hell
 * 
 *                            solution to promise Hell is ASYNC/AWAIT
 *                            But async await hell still exists
 * 
 * 
 *
 *      The Biggest Disadvantage of callback is 
 *          
 *          --> Inversion of control
 * 
 */
