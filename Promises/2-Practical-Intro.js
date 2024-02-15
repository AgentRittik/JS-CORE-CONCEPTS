/***
 *           To Understand we just have to understand the 2 things 
 *                  
 *          [1] -> How to create a Promise
 *          [2] -> How can consume a promise
 * 
 * 
 *      Basic understanding of the promise
 *          
 *      [e.g] -> i promise you once you complete the course I will  give you referal [MUTUAL AGREEMENT]
 *            -> [THE PROMISE CAN SHOULD BE BROKEN ] -> i might that i also lost my job
 * 
 *      [STATES OF PROMISE]
 *          [1] -> [FULFILL] ->  you completed the course -> i will give you a referal
 *          [2] -> [REJECTED] -> you have not completed he course
 *          [3] -> [PENDING] -> When we create a new promise Obj this is the defaut state(it represents the work is in progress)
 * 
 * 
 *          state can migrate from [    pending     ]
 *                                      /       \
 *                                fulfilled    Rejeccted
 * 
 *         [if the operation is completed]     [If the operation is failed]
 *                    
 */
/**
 *                [IMPORTANT FACTS OF PROMISES]
 * 
 *      [.] -> promises can be created for both Async/Sync tasks 
 *  
 *      [.] -> Promise Obj are native to JS [native JS code handeled Synchronously by JS] 
 *      
 *      [  CREATION OF PROMISE OBJECT IS SYNCHRONOUS IN NATURE ] only creation -> that means returning the placeholder is synchronous
 *    
 */


/**
 *                   [  CREATING THE PROMISE  ]
 *                  
 *                  -> new Promise(); -> using new keyword we can create the Promise
 * 
 *                  []-> here the [Prmoise] is a constructor -> it will creta a new object
 *                    -> this Promise will expect a callback function -> 
 *                       callbackFunction expects [2] argments -> (resolve, reject)
 *                        
 */     


const x = new Prmoise(function exec(resolve , reject){   // this func can be named or can be anynomous
        
    //Inside this function we can write our time consuming task

    // sync task -> forloop

    // async task -> downloading data from the internet
})


/**
 *      function (resolve, reject ) -> this function is called the executer function
 *      
 *   [resolve] -> [fucntion] ->  if any time you call this fucntion inside the callback function code
 *                              the state of promise go  to [FULFILLED ] state
 * 
 *  [reject] -> [fucntion] ->  if any time you call this fucntion inside the callback function code
 *                              the state of promise go  to [ REJECTED ] state
 * 
 *  [ . ] -> IF YOU DON'T CALL ANYTHING THE PROMISE REMIANS IN PENDING STATE
 * 
 * 
 */

/**
 *              Promise object can have to propertie
 *                         /            \ 
 *                      value          state
 *              
 *            [pending] -> undefined
 * 
 *            [fulfilled] -> we have to call the  resolve -> resolve can be called with the  argument
 *                           resolve( argument ) ->   [value] -> argument 
 *                          (argument can be of anytype)
 * 
 *            [Rejected] -> [value] -> argument passed to resolve(argument) function     
 *
 */



