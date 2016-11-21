"use strict";

const http = require('http');

let urlOne = process.argv[2];
let urlTwo = process.argv[3];
let urlThree = process.argv[4];

let queryOne = '';
let queryTwo = '';
let queryThree ='';

function requestOne(urlOne) {
    http.get(urlOne, (dataOne)=>{
        dataOne.on('data', data =>{
            queryOne += data.toString();
        });
        dataOne.on('end', data =>{
            console.log(queryOne);
            requestTwo(urlTwo)
        });
    });
}
function requestTwo(urlTwo) {
    http.get(urlTwo, (dataTwo)=>{
        dataTwo.on('data', data =>{
            queryTwo += data.toString();
        });
        dataTwo.on('end', data =>{
            console.log(queryTwo);
            requestThree(urlThree);
        });
    });
}
function requestThree(urlThree) {
    http.get(urlThree, (dataThree)=>{
        dataThree.on('data', data =>{
            queryThree += data.toString();
        });
        dataThree.on('end', data =>{
            console.log(queryThree);
        });
    });
}

function init(urlOne){
    requestOne(urlOne);
}

init(urlOne);