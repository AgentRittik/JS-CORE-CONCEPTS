

function fetchData(url){
    return new Promise(function exec(resolve , reject){
        console.log("started downloading from the ",url);
        setTimeout(()=>{
            let data  = "Dummy data";
            console.log("Download completed");
            resolve(data);                    //[3] - >here we are resolving the promise so now the state,value changes and we also call the functions of corresponding handlers
        },7000)
    })
}

console.log("Start");
const promiseObj = fetchData("ww.xyz.com"); //[1]  at this point the pormise looks like
                                            // state : <pending>
                                            // value : undefined
                                            // fulfillment : []
                                            // rejection : []
console.log(promiseObj);
promiseObj.then(
    function fulfilmentHandler(value){      //  here we will register the handlers
                                            // state : <pending>
    console.log(promiseObj);                // value : undefined
    console.log("fulfilled with ", value);  // fulfillment : [fulfilmentHandler]
    },                                      // rejection : [rejectionHandler]
    function rejectionHandler(value){
        console.log("rejected with", value);
    }
)

console.log("end");