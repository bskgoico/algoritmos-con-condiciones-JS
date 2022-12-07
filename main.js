// Pedir un número mediante prompt y si es mayor a 1000 mostrar un alert

let numeroA = parseInt(prompt('Ingrese un número'))

if (numeroA > 1000) {
    alert('Su numero '+ numeroA +' es mayor a 1000')
} else {
    alert('Su numero '+ numeroA +' es menor a 1000')
}


// Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.

let textoA = prompt('Ingrese un texto')

if (textoA == 'Hola') {
    console.log('alerta')
} else {
    console.log('error')
}


//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.

let numeroB = parseInt(prompt('Ingrese un número'))

if (numeroB >= 10 && numeroB <= 50) {
    alert('Su numero '+ numeroB +' está entre 10 y 50')
} else {
    alert('Su numero '+ numeroB +' no está entre 10 y 50')
}