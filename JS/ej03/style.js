const divContenido = document.getElementById('contenido')

setInterval(() => {
    const ahora = new Date()
    divContenido.textContent = ahora.toLocaleTimeString()
}, 1000)
