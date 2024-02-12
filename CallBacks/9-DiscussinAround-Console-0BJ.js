

// cosnole is not a native JS object or the Ecmascript object

/**
 *      console is provided by the runtime 
 *       [] -> is the [CONSLOE] is SYNC or ASYNC
 *             -> It is totally dependent how the runtime is going to handle it .
 * 
 **/

// How the Node handle the [Console.log]


// Note : POSIX - >refer to linux
/***
 *   In Node -> the Console.log internally use the [process.stdout.write] function of node
 *      
 *   [process.stdout] and [process.stderr] differ from other Node.js streams in important ways:
 * 
 *          1. They are used internally by console.log() and console.error(), respectively.
 *          2.  Writes may be synchronous depending on what the stream is connected to and whether the system is Windows or POSIX:
 *               Files: synchronous on Windows and POSIX
 *               TTYs (Terminals): asynchronous on Windows, synchronous on POSIX
 *               Pipes (and sockets): synchronous on Windows, asynchronous on POSIX
 * 
 * 
 *  Question  : we always have to tell that considering the console.log runs synchronously
 *              through we are the expecting the output 
 */