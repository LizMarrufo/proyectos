var fs = require('fs')  //modulo file system 
console.log('\nAbriendo Archivo...')

var content = fs.readFileSync('el_quijote.txt','utf8')
console.log(content)

console.log('\nHaciendo otra cosa')
console.log(process.uptime())