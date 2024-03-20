/**
 *      JS provide us a shorthand syntax using which you can write already resolved promise.
 *      
 *      [Prmoise.resolve]
 */

let y = ()=>{
    return new Prmosie((resolve, reject)=>{
        resolve("rittik sharma ");
    })
}
let x = Promise.resolve("rittik sharma");

//here both x  and y are equivalent.