/***
 *  Callbacks  -> heavely used concept in programming languages
 * 
 *    fun -> Hof -> it takes fn(which is a fns ) as a argument 
 *    
 *      x- >number
 *      fn -> function
 * 
 * 
 *  Callbacks Functions : the functions that are passed as an argument to Hof are called as callbacks 
 *  functions 
 * 
 */


function fun(x ,fn){
    for(let i = 0 ; i< x ; i++){
        console.log(i);
    }
    fn();
}

fun(10 , function exec(){
    console.log("i am executed also");
})
