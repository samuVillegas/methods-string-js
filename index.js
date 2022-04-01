//charAt()
let var1 = "Samuel Villegas";

var1.charAt(0) // S

//Concat(cad1,cad2,...,cadn)
const str1 = "Juliana";
const str2 = "Torres";
str1.concat('---',str2)
'Juliana---Torres'
const str3 = "Posada";
str1.concat('---',str2,'---',str3)
'Juliana---Torres---Posada'
str1.concat(1,str2,'---',str3)
'Juliana1Torres---Posada'

//indexOf(cad)
const colombia = "No va al mundial";
colombia.indexOf('a')
3
colombia.lastIndexOf('a')
14

//includes(cad)
const oracion = "Nunca te rindas!"
oracion.includes('te')
true

const frases = "Van a pasar este proceso todos"
frases.replace('pasar','lograr')
'Van a lograr este proceso todos'


// subsrt y slice
operacion = 'deodoejdqhpdqedq123123(x+y)ddejidji--sdihe'
init = operacion.indexOf('(');
fin = operacion.indexOf(')');
console.log(operacion.substr(init+1,fin-init-1))
'x+y'
init = operacion.indexOf('(');
fin = operacion.indexOf(')');
console.log(operacion.slice(init+1,fin-init-1))
init = operacion.indexOf('(');
fin = operacion.indexOf(')');
console.log(operacion.slice(init+1,fin-init-1))
init = operacion.indexOf('(');
12
fin = operacion.indexOf(')');
16
operacion.slice(13,3)
''
operacion.substr(13,3)
'x+y'
operacion.substr(13,3)
'x+y'
let prueba = "dbsdgbelwbwebg(x+y)94320759324u"
let cantidad = prueba.indexOf("(")
let cantidadf = prueba.indexOf(")")
prueba.slice(cantidad+1, cantidadf)
'x+y'