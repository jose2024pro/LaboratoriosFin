const realizarOperacion = (num1, num2, operacion) => {
    if (operacion == "suma") {
        
        return (num1 + num2);
    } 
    else if (operacion == "resta") {
        return (num1 - num2);
    }
    else if (operacion == "multiplicacion") {
        return (num1 * num2);
    }
    else if (operacion == "division") {
        if (num2 == 0) {
            return "No es posible realizar una division por cero"
        }

        return (num1 / num2);
    }
    else {
        return "Esta operacion no es valida"
    }
}

let num1, num2, operacion;
let pregunta;

while(operacion != "salir") {
    num1 = parseInt(prompt("\nIngrese el primer numero \n"));
    num2 = parseInt(prompt("Ingrese el segundo numero \n"));
    
    operacion = prompt("Ingrese la operacion (suma, resta, multiplicacion, division): \n");

    console.log("El resultado es: ")
    console.log(realizarOperacion(+num1, +num2, operacion))
    alert("El resultado es: "+realizarOperacion(+num1, +num2, operacion))
    pregunta = prompt("\n\nDesea realizar otra operacion? si/no \n")

    if (pregunta == "si" || pregunta =="SI") {
        continue
    } else {
        alert("Gracias por usar la calculadora! Adios!!\n")
        break
    }
}