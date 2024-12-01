const divContenido = document.getElementById('contenido')
divContenido.textContent = 'Hola mundo!'
const colores = ['red', 'blue', 'green', 'yellow', 'pink']
let indiceColor = 0

setInterval(() => {
    divContenido.style.backgroundColor = colores[indiceColor]
    indiceColor = (indiceColor + 1) % colores.length
}, 1000)
