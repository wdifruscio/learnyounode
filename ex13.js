"use strict";

const url = require('url');
const http = require('http');
let port = process.argv[2];
console.log(port);

let server = http.createServer((req,res) => {
    let stream = url.parse(req.url,true);
    let date = stream.query.iso;
    console.log(date);
    let getDate = (stream.pathname);

    if(getDate == "/api/pathname/"){
        res.writeHead(200, { 'Content-Type': 'application/json' })
        console.log(res);        
    }
    if(getDate == "api/unixtime/"){
        console.log(date.getTime());
    }

    // console.log(res);
    res.end();
}).listen(port);


