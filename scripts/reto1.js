console.log("este es el reto 1")

/*
RETO

Lista de nombres
Escribe un programa que le pida al usuario 3 nombres, los almacene en un arreglo de datos y luego los muestre, si el nombre está repetido, no debe guardarlo.
*/ 

/*

1. el problema
2. analizarlo
3. diseñar
4. codificar

*/


        // Definir un arreglo vac�o para almacenar los nombres
        let nombres = [];


         // Funci�n para mostrar los nombres ingresados
        function mostrarNombres() {
            alert("Nombres ingresados:"+ nombres);
            
        }

        // Funci�n para iniciar el ingreso de nombres
        function agregarNombre() {
            if (nombres.length < 3) {
                let nombre = prompt("Ingrese un nombre:");
                if (nombre) {
                    // Verificar si el nombre ya existe en el arreglo
                    if (nombres.includes(nombre)) {
                        console.log("El nombre ya ha sido ingresado.");
                    } else {
                        nombres.push(nombre);
                        alert("Nombre agregado: " + nombre);
                        // Mostrar los nombres ingresados
                        mostrarNombres();
                    }
                } else {
                    console.log("No se ingres� ning�n nombre.");
                }
            } else {
                alert("Ya se han ingresado 3 nombres.");
                // Mostrar los nombres ingresados
                mostrarNombres();
            }
        }


