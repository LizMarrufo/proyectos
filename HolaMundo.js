'use strict' //modo escrito para programar con buenas practicas

//imprime en pantalla 
console.log('Hola Mundo desde Node.js, esto se vera en la terminal de comandos')

//hacemos una operacion basica
console.log(2*5)

//al utilizar una instruccion de js frontend marca error en node js
//console.log(window)

//imprime en consola todo lo relacionado con el modulo GLOBAL
console.log(global)

//realizamos una funcion para imprimir cada segundo 'hola nodejs'
setInterval(function(){
    console.log('Hola nodejs')
},1000)