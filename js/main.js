const productos = [
    { nombre: "Agua", precio: 150 },
    { nombre: "Gaseosa", precio: 250 },
    { nombre: "Jugo", precio: 200 },
    { nombre: "Alcohol", precio: 350 }
];

let carrito = [];
let seleccion = prompt("Hola bienvenido, si desea visualizar nuestra lista de productos introduzca SI, para finalizar introduzca NO")
function despedida(){
    alert("Gracias por visitarnos, vuelva pronto!")
}


while (seleccion != "si" && seleccion != "no") {
    alert("Por favor, ingrese una opcion valida, SI o NO")
    seleccion = prompt("Hola bienvenido, si desea visualizar nuestra lista de productos introduzca SI, para finalizar introduzca NO")
}

if (seleccion == "si") {
    alert("A continuacion, podra visualizar nuestra lista de productos:")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join("\n"))
} else if (seleccion == "no") {
    despedida();
}



while (seleccion != "no") {
    let producto = prompt("Agregue un producto a su carrito")
    let precio = 0

    if (producto == "Agua" || producto == "Gaseosa" || producto == "Jugo" || producto == "Alcohol") {
        switch (producto) {
            case "Agua":
                precio = 150;
                break;
            case "Gaseosa":
                precio = 250;
                break;
            case "Jugo":
                precio = 200;
                break;
            case "Alcohol":
                precio = 350;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Cuantas unidades?"))

        carrito.push({ producto, unidades, precio })
        console.log(carrito)
    } else {
        alert("Disculpe, ese producto no lo tenemos")
    }

    seleccion = prompt("Desea seguir comprando?")

    while (seleccion === "no") {
        
        carrito.forEach((carritoFinal) => {
            alert(` Producto: ${carritoFinal.producto}\n Unidades: ${carritoFinal.unidades}\n Total a pagar por producto $ ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`El total a pagar es: $ ${total}`)
despedida();
