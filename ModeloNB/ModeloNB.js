var fs = require("fs")
console.log ("\nAbriendo Archivo...")

var content = fs.readFile("el_quijote.txt","utf8", function(error,content){
    console.log(content)
})

console.log("\nHaciendo otra cosa\n")
console.log(process.uptime())