export class Producto {
    constructor(nombre, precio, marca, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.id = id;
    }
}

export function inicializarProductos(ArrayProductos, idUniversal) {
    const gabinete1 = new Producto({ nombre: "Gabinete Corsair 5000D", precio: 25000, marca: "Corsair blanco", id: idUniversal++ })
    ArrayProductos.push(gabinete1)

    const gabinete2 = new Producto({ nombre: "Gabinete Sentey GF30", precio: 30000, marca: "Sentey GF30", id: idUniversal++ })
    ArrayProductos.push(gabinete2)

    const gabinete3 = new Producto({ nombre: "Gabinete Sentey PM20", precio: 35000, marca: "Sentey PM20", id: idUniversal++ })
    ArrayProductos.push(gabinete3)

    const gabinete4 = new Producto({ nombre: "Gabinete Thermaltek P3T6", precio: 37000, marca: "Thermaltek core P3T6", id: idUniversal++ })
    ArrayProductos.push(gabinete4)

    const monitor1 = new Producto({ nombre: "Monitor Acer 21", precio: 50000, marca: "Acer", id: idUniversal++ })
    ArrayProductos.push(monitor1)

    const monitor2 = new Producto({ nombre: "Monitor LG 27 ", precio: 60000, marca: "LG", id: idUniversal++ })
    ArrayProductos.push(monitor2)

    const monitor3 = new Producto({ nombre: "Monitor Philips 19 ", precio: 42000, marca: "Philips", id: idUniversal++ })
    ArrayProductos.push(monitor3)

    const monitor4 = new Producto({ nombre: "Monitor Philips 22", precio: 48000, marca: "Philips", id: idUniversal++ })
    ArrayProductos.push(monitor4)

    const monitor5 = new Producto({ nombre: "Monitor Philips 27 Curvo", precio: 70000, marca: "Philips", id: idUniversal++ })
    ArrayProductos.push(monitor5)

    const monitor6 = new Producto({ nombre: "Monitor Samsung 22 ", precio: 68000, marca: "Samsung", id: idUniversal++ })
    ArrayProductos.push(monitor6)

}

export const agregarAlCarrito = (carrito, producto) => {
    carrito.push(producto)
}