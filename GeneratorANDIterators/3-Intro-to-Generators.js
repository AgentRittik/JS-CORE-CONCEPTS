/**
 *          While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state
 *         
 *          Generator functions are function whose execution is not continuous
 * 
 *          Generator functions are written using the function* syntax.
 * 
 *          -> When called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a Generator.
 *             When a value is consumed by calling the generator's next method, the Generator function executes until it encounters the yield keyword.
 */

function* fetchNextElement(){
    console.log("i am inside the generator function");
    yield 1; // the moment the generator see the yield then it stops the execution and then return the value of the yield
    yield 2; // next time the execution starts from here
    console.log("Something  in the middle");
    yield 4;
    return 10; // now this is considered the end of  the function ->  this value resolves as {value : 10 , done : false } -> this is considered as final yield
    yield 5; // -> this is not going to considered 
}

/// the whole implementation stores in the iter variable
const iter = fetchNextElement(); // the executio of a generator finction doesn't start during the calling of the functions
                                 // Rather it returns you  iterator and then for execution you can use .next() function

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// yield is similar to return but not exactly a yield.

// return ->  keyword considered as final yield  ->  this momentary stops the execution of the function 