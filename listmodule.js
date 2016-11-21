"use strict";
const fs = require('fs');
const path = require('path');
let results = [];

// function filtering(item){
    
// }

module.exports = function(dir,filter,callback) {
    // console.log(filter);
    fs.readdir(dir, (err,file) =>{
        if (err){
            return callback(err);
        }
        else {
            file.forEach(fileName => {
                // console.log(fileName[i]);
                if(fileName.indexOf('.'+filter) > -1){
                    console.log(fileName);
                    results.push(fileName);
                }
            });
        }
        callback(null,results);
    })
}