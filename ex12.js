"use strict";

const http = require('http');
const fs = require('fs');
let throughmap = require('through2-map');
let port = process.argv[2];

let server = http.createServer((req,res) => {
    if (req.method != "POST"){
        return res.end('not POST request');
    }
    else {
        req.pipe(throughmap( (chunk)=>{
            console.log(chunk);
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
}).listen(port);

//QUESTIONS.

// how to write throughmap function with es 6
// pipe in general is confusing to me.
// when to put a , and when to use an extra () with built in methods
//