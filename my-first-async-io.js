var fs = require('fs')  
var file = process.argv[2]  
  
fs.readFile(file,'utf8', function (err, contents) {  
    if(err) {
        console.error(err);
        return;
    } 
  var lines = contents.toString().split('\n').length - 1  
  console.log(lines)  
})