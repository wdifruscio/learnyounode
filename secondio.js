var fs = require('fs');
// var result = 0;
var myFile = process.argv[2];

fs.readFile(myFile,function(err,data){
    if(err){
        throw err;
    }
    var myFileArray = data.toString().split('\n');
    console.log(myFileArray.length - 1);
});
            