var fs = require("fs");

console.log(11111111);
//同步写文件
var res = fs.writeFileSync("./txt/t1.txt");
console.log(res);
console.log(22222222);