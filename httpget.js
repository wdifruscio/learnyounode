"use strict";

const http = require('http');
let myUrl = process.argv[2];

http.get( myUrl, (response) => {
    response.on('data' , (data) => {
        console.log(data.toString());
    });
});