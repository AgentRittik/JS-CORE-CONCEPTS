/**
 *      How Promises resolved the issue of the callbacks 
 *  
 *      -> inversion of control
 */


/***
 *                                    [SCENARIO]
 *      
 *      This download functionn is not written by you it is written by some one else . adn you are 
 *      expecction the callback function to be called once but suppose they have call you callback 
 *      fucntion [Twice or never called it ] -> so here we are giving the control of our function to 
 *      someone else.
 */
function download(url ,cb){
    console.log("Started downloading from the ",url);
    setTimeout(function exec(){
        const content = "ABCEDF";
        console.log("completed downlloading from the ",url);
        cb(content);
        cb(content);  /// they call the callback function twice
    },5000);
}

download("www.xyz.com", function processDownload(data){
    console.log(data);
})

/***
 *      But thats not the case with the promises.
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
x.then(function fulfilmentHandler1(value){
    console.log("content downlaoded is",value); // here we are not giving the control of callback to someone else.
})
// if we want to call promise 2 time then how to do that
x.then(function fulfilmentHandler2(value){
    console.log("content downlaoded is",value); // here we are not giving the control of callback to someone else.
})
/**
 *  the control of what should happen with your callback is with you.
 *  if they never call the callback that case you still know what happned ->because at that
 *  case your promise is in pending state
 */