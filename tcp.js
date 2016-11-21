"use strict";

const net = require('net');
let port = process.argv[2];
let date = new Date;

function checkDate(date) {
    return (date < 10 ? '0' + date : date);
}

function makeDate() {
    var datePrint  = "";
    datePrint += checkDate(date.getFullYear()) + '-';
    datePrint += checkDate(date.getMonth()) + 1 + '-';
    datePrint += checkDate(date.getDate()) + ' ';
    datePrint += checkDate(date.getHours()) + ':';
    datePrint += checkDate(date.getMinutes());
    datePrint += '\n'
    return datePrint;
}


let server = net.createServer(socket => {
    socket.on('error',()=>{
        throw err;
    });
    //ask why can't do socket.on('end', callback) //
    var date = new Date();
    socket.end(makeDate(date));
});

server.listen(port,(e) =>{
        console.log(server.address(e));        
});

