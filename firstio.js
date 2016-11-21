var fs = require('fs');
var result = 0;

var printout = fs.readFileSync(process.argv[2]);
var arr = (printout.toString().split('\n'));
console.log(arr.length - 1);

