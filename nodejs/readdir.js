var testFolder = './data';//현재파일에서 data폴더선택
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
    console.log(filelist);
})