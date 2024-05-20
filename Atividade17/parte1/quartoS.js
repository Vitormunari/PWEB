const fs = require('fs');
const data = fs.readFileSync('file.txt');
// a execucao é bloqueada até o arquivo ser lido
console.log(data.toString());
