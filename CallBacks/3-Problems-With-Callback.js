/***
 * 
 * Inversion Of Control
 * 
 * CallbackHell  -> [callbackhell.com] website reference
 *               -> this is just a resdibility code . it doesn't hamper the logic code
 *               -> 2-3 level callback nesting we can write 
 */



//Ibversion of control

let arr = [ 1,10,100,9,2,3,11];


arr.sort(function comp(a,b){   //  i am passing  cmp functions so is there any garuntee that 
                                // SORT functions everytime calls it 
    return a-b;
});

console.log(arr);



function doTask(fn , x){

    //whole implementation done by Team A


    // later scenario  -> some intern came in the company and remove fn(x*x) function call
    // or call the function twice -> But in this case the team B is consuming the DoTask Function
    // 
    fn(x*x);  // callling my callback with square of x
} //team A


// here team b tries to use it

doTask(function (num){               // now how your exec fns is handled inside the DoTask is handled by someone else here we pass the control to some else
    console.log("Woh num is",num);
},9);


/**
 *   Inversion Of Control : 
 *                         -> the team B has written the code of exec funcction,
 *                         -> but in callback how this exec function is handled is decided by the Team A code
 *                         -> so here we pass the control off our function to some other entity and we don't even know
 *                         -> it that hoe they are going to use it ,  it may be a case in which they use it for buggy code
 * 
 * 
 * Due to usuage of Callback i am passing the control how exec is called to DOTask
 * -> Due to this lots of problem can occurs
 * 
 * -> suppose this function can handle the payment but Dotask is calling it twice then this is very bad for the company
 */