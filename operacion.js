"use strict"
//capturo los elementos pantalla y el contenedor principal
const display = document.querySelector('.pantalla');
const container = document.getElementById('section');
// variables vacías number1 guarda el primer n°, number2 el segundo, operador el simbolo operador
let number1 = "";
let operador = "";
let number2 = "";
// variable que guarda la funcion segun el signo
let cb = "";
//el evento se realiza en el contenedor principal 
container.addEventListener("click", (e) => {
    const clickBoton = e.target.closest("button")//closest me devuelve un valor v o f. v => click boton.f=> click afuera del boton
    if (clickBoton) {//si hace click en boton
        switch (clickBoton.textContent) { //clickBoton guarda el elemento boton => textContent muestra su contenido
           //limpia la pantalla volviendo todo el contenido a vacío
            case "Clear":
                number1 = "";
                number2 = "";
                operador = "";
                cb = "";
                display.textContent = `${number1}${operador}${number2}`;
                break;
                //luego de ralizar el calculo, al pesionar =, la pantalla queda vacia
            case "=":
                display.textContent = calculo(number1, number2, cb);
               /*  number1 = "";
                number2 = "";
                operador = "";
                cb = ""; */

                break;
                //en la variable cb(callbak) se guarda la operacion a realizar segun el operador presionado
            case "/":
                cb = div;
                operador = clickBoton.textContent;
                display.textContent = `${number1}${operador}${number2}`
                break;
            case "*":
                cb = mult;
                operador = clickBoton.textContent;
                display.textContent = `${number1}${operador}${number2}`
                break;
            case "-":
                cb = res;
                operador = clickBoton.textContent;
                display.textContent = `${number1}${operador}${number2}`
                break;
            case "+":
                cb = sum;
                operador = clickBoton.textContent;
                display.textContent = `${number1}${operador}${number2}`
                break;
                //caso por defecto => si el boton presionado es un numero lo devuelve por pantalla
                default :
                if (operador == ""){
                    number1 += clickBoton.textContent;//concatena dos o mas valores a ingresar para formar dos o mas cifras
                } else {
                    number2 += clickBoton.textContent;
                }
                display.textContent = `${number1}${operador}${number2}`//muestra por pantalla cada opcion elegida

                break;
        }
        
/*         console.log(`num1: ${number1} operador: ${operador} num2: ${number2}`);
 */        }    
});

//funciones para cada operacion


function calculo(num1, num2, operacion) {
    return operacion(parseInt(num1), parseInt(num2));//se parsea los valores string a numero
}
function sum(a, b) {
    return a + b;
}
function res(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function div(a, b) {
    if (b == 0) {
        return "Error"
    } else {
        return a / b;
    }
}