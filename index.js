const fs = require('fs');

console.log(fs.readdirSync('./scripts/template/initConfig').filter(res => res.includes('.tpl')));
