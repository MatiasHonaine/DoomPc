export class Producto {
    constructor(nombre, precio, marca, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.id = id;
    }
}

export function inicializarProductos(ArrayProductos, idUniversal) {
    // con fetch mediante una API o archivo localJson
    fetch("./productos.json")
    .then(response => response.json())
    .then(res => {
        const container = document.getElementById("container");
        res.data.forEach(el => {
            
        })
    })
    .catch(error => console.log(error))
}

export const agregarAlCarrito = (carrito, producto) => {
    carrito.push(producto)
}