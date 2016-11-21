"use strict";

const http = require('http');
const fs = require('fs');
let port = process.argv[2];
let fileName = process.argv[3];

let server = http.createServer((req,res) => {
    let readStream = fs.createReadStream(fileName);
    readStream.on('open', () => {
        readStream.pipe(res);
    })
}).listen(port);