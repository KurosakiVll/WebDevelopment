const formulario = document.querySelector('form')

let ultimoId = localStorage.getItem('ultimoId')
    ? parseInt(localStorage.getItem('ultimoId'), 10)
    : 0

formulario.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(formulario)
    const datosUsuario = {}

    formData.forEach((value, key) => {
        datosUsuario[key] = value
    })

    console.log('Datos del formulario:', datosUsuario)

    const usuario = { id: ++ultimoId }
    for (const clave in datosUsuario) {
        if (clave !== 'foto_perfil' && clave !== 'cv') {
            usuario[clave] = datosUsuario[clave]
        }
    }

    console.log('Usuario (objeto clave-valor):', usuario)

    guardarUsuario(usuario)

    localStorage.setItem('ultimoId', ultimoId)
})

function guardarUsuario(usuario) {
    const usuarios = obtenerUsuarios()
    usuarios.push(usuario)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}

function obtenerUsuarios() {
    const usuarios = localStorage.getItem('usuarios')
    return usuarios ? JSON.parse(usuarios) : []
}
