import { inicializarProductos, agregarAlCarrito } from './clases/index.js';


const ArrayProductos = [];
const ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
let idUniversal = 1;

inicializarProductos(ArrayDeProductos, idUniversal);
let productoEncontrado = {};


input.addEventListener("input", (event) => {
    productoEncontrado = ArrayDeProductos.find(el => el.nombre === event.target.value)
})

input.addEventListener("keypress", (event) => {
    (event.key === "Enter" && productoEncontrado) && console.log("el producto es:", productoEncontrado)
})

ArrayProductos.forEach((el, index) => {
    const section = document.createElement("section")
    section.classList.add("card")
    section.id = "producto" + (index + 1)
    const articule = `
                    <div class="conteiner-item">
            <div class="item" id="producto">
                <figure>
                    <img src="${el.url}" alt="producto">
                </figure>
                <div class="info-item">
                    <h2>
                    ${el.nombre}
                    </h2>
                    <p class="precio"><strong>$${el.precio}<strong></p>
                    `
    const div= document.createElement("div")
    const button=document.createElement("button")
    button.innerHTML=`
                    <button class="button">Añadir al carrito</button>
                    `
    buttonAgregar.innerText = "Añadir al carrito";
    buttonAgregar.addEventListener("click", () => {
        agregarAlCarrito(ArrayCarrito, el);
        localStorage.setItem("carrito", JSON.stringify(ArrayCarrito))
    })

    tarjeta.appendChild(buttonAgregar);
    app.appendChild(tarjeta);
})

let userInputNumber=0;

input.addEventListener("click",()=>{
    userInputNumber++
    userInput.value=userInputNumber
    console.log(userInputNumber)
})



