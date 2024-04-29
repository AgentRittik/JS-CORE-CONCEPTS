/***
 * 
 *                          There are two types of languages
 *                                 /             \
 *                           Imperative        Declarative
 * 
 *                      e.g  C++                   SQl -> we only tell waht to do and rest everything is handeled by language
 *                In these language at every 
 *                step we tell what to do,
 *                How to do , where to do
 * 
 * 
 *               [[CONTEXT IN TERMS OF JS ]]\
 * 
 *         Imperative  :  arr = [1,2,3,4,5] ->  accessing the elemet arr[2] -> here we are manually defining that where to go and get the data 
 * 
 *        Declarative  : The other approach/pattern we can use for accessing the array data
 *                       
 * 
 *                            
 */

// Writing the function by avoiding imperative programming 

// writing a custom iterator


function fetchNextElement(arr){
    let x =0
    function next(){
        if(x == arr.length){
            //return undefined;
            return {value: undefined , done : true};
        }
        return {value : arr[x++] , done : false};
    }
    return {next}; // here returning a function in a object {next : fucntion next(){//implementation}}
}

const automaticFetcher = fetchNextElement([1,2,3]);
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());


/**
 *      Iterators object in javascript contains 2 values
 * 
 *              {
 *                  value :  -> current value of the iterator at -> This gets [[Undefined]] when done : true
 *                  done  : true/false ->  this is equivalent to true when we have iterate over all the value and now iterator is out of the bound
 *              }
 */