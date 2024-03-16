
/// resolving and rejection a promise with srttimeout id 

// This code runs correctly in browser because in browser setTimeout return a number 
// but in node environment it will return a object 

function createPromise(){
    return new Promise((resolve, reject)=>{
        let id  = setTimeout(()=>{
            return 2;
        },5000); 

        if(id%2 == 0){
            resolve(id);
        }
        else{
            reject(id);
        }
    })
}

const p = createPromise();
console.log(p);
p.
 then(
    (value)=>{
        console.log("fulfilled", value);
    },
    (value)=>{
        console.log("rejected", value);
    }
 )
