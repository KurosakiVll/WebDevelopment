const btnAnadir = document.getElementById('anadir')
const btnEliminar = document.getElementById('eliminar')
const contenedor = document.getElementById('contenedor')
const posicionInput = document.getElementById('posicion')

const urlsImagenes = [
    'https://via.placeholder.com/150/FF0000',
    'https://via.placeholder.com/150/00FF00',
    'https://via.placeholder.com/150/0000FF',
    'https://via.placeholder.com/150/FFFF00',
    'https://via.placeholder.com/150/FF00FF',
]

btnAnadir.addEventListener('click', () => {
    const imagenesActuales = contenedor.children.length
    if (imagenesActuales < 5) {
        const img = document.createElement('img')
        img.src = urlsImagenes[imagenesActuales]
        img.style.margin = '10px'
        contenedor.appendChild(img)
    } else {
        alert('Solo puedes añadir un máximo de 5 imágenes.')
    }
})

btnEliminar.addEventListener('click', () => {
    const posicion = parseInt(posicionInput.value, 10)
    const imagenesActuales = contenedor.children.length

    if (isNaN(posicion) || posicion < 1 || posicion > imagenesActuales) {
        alert(`Por favor, introduce un número entre 1 y ${imagenesActuales}.`)
        return
    }

    const indice = posicion - 1
    contenedor.removeChild(contenedor.children[indice])
})
