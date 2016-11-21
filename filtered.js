"use strict";
const mymodule = require('./listmodule.js');
let directory = process.argv[2];
let ext = process.argv[3];
let re = new RegExp(ext);

mymodule(directory, ext, (err, list) =>{
    // for (var i = 0; i < list.length; i++){
    // }
});