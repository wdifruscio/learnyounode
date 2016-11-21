"use strict";
const http = require('http');
let myUrl = process.argv[2];
let dataStr = '';
let dataLength = 0;

http.get( myUrl, (response) => {
    response.on('data' , (data) => {
        dataLength += data.length;
        dataStr += data.toString();    
    });
    response.on('end', (data)=>{
        console.log(dataLength);
        console.log(dataStr);
    });
});

