

function* fetchNextElement(){
    console.log("inside generators");
    const x =10;
    yield 11;
    console.log('entering after the yield');
    const y = x+(yield 13); //  ->  The execution stops here and when next time we call next() thenn this value is evaluated as [[Undefined]] as we haven't send any data in the next() fns call
    console.log(y);
    const z = x + (yield 14);// -> but it again stops but the value evaluated  to whatever value we passed to the next() fns
    console.log(z);
}

console.log('Starting ...');
const itr  = fetchNextElement();
console.log('Ending ...');

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next(23)); /// here we are passing the value as 23 ,So there the valu yielded as 23