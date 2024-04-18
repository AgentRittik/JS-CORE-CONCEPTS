

/**
 *       **********************[.then]**********************************
 * 
 *      .then function also returns a new promise object.
 *      it immediately return a new promise object
 *      
 *      what we can do is we can use this new promise object to chain a new .then
 *      
 *
 */

function download2(url){
    return new Promise(function exec(res){
        console.log("Started the downloading from",url);
        setTimeout(function(){
            console.log("completed the downloading from",url);
            let data = "QWER"
            res(data);
            res(data); ///->nothing even happpens if we call the resolve twice
        },5000);
    });
}

let x = download2("ww.abcd.com")
let y = x.then(function fulfilmentHandler1(value){
        console.log("content downlaoded is",value);
        return "hi";
    },
    function rejectionHandler(){
        console.log("prommise got rejected");
    }
)

/**
 * the promise y that is returned by x go fulfilled when the fullfillment handler return something
 */

console.log(y); // is a pending promise // for better understanding run code in chrome
setTimeout(()=>{
    console.log(y);
},5000);
// chaining in prommises

download2("ww.something.com")
.then(
    function fulfilmentHandler1(value){
        console.log("content downlaoded is",value);

        return "New Promise string" // this is return not resolve
    },
    function rejectionHandler(value){
        console.log("prommise got rejected");
    }
)
.then(
    function newFulfilmentHandler(value){
        console.log("value from chained then promise",value);
    }
)