/***
 *  Problem with  callback  : [Callback Hell ] , [Inversion Of Controls]
 * 
 * 
 *                            [--PROMISES--]
 * 
 *      -> Promises are the Readibility enhancers
 *      -> Solves the Problem of Inversion Of Control
 *      -> Promises is just a coding pattern (they not only exist in js but other languages also -> we can build these for other lannguages)
 * 
 *      [1] ->  In JS ,  Promises are special type of object that get returned  immediately when we call them.
 * 
 *      [2] ->  Promises acts as a placeholder for the data we hope to get back sometime in future
 *              [e.g] -> you are doing an asynchronous task (Downloading the data using fetch -> 
 *                       this is a time consuming task ),the js compiler is not going to  wait
 *                       for this -> IF we assume that the [Fetch] is wriitten using the promise 
 *                       then the fetch immediately return a promise[ which acts a placeholder value for the result data unitl the actual data get back to us ]
 * 
 *      [3] ->  In these promise objects we can attach the functionality we want to execute once the future task is done.
 *              [e.g] -> once the completion of the data is done then i want show the user a messaage 
 * 
 *      [4] ->  Once the future task is done tbe Promise will automatically execute the attached functionality
 * 
 * 
 */

/***
 *                  CALLBACKS Example
 *          
 *          fetch("www.google.com" , function exec(){
 *                      
 *                  // do something                       
 *                      
 *           })
 * 
 *        [.] -> In this above scensrio we have to attach the callback function or  implementation then and there only 
 *              
 *              But in case of promises we don't have to do that as the promises  return the placeholder value
 *              so we can later on also attach the functionality -> we don't have to attacj it then and there only
 *          
 *          const x = Promise()
 *          
 *          ///doing something
 *          ///doing something
 *          ///doing something
 * 
 *          x.functionality   // attaching the functionality later on to the proomise placeholder
 */