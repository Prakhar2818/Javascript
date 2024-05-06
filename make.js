const fs=require('fs')
fs.appendFile('examaple.txt','Hello World',
function(err){
    if(err){
return console.log(err);
    }
    console.log("The data is appended in file");
});