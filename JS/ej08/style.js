const cuerpoTabla = document.querySelector('table tbody')

function cargarUsuarios() {
    const usuarios = localStorage.getItem('usuarios')
    return usuarios ? JSON.parse(usuarios) : []
}

function renderizarTabla() {
    const usuarios = cargarUsuarios()

    console.table(usuarios)

    cuerpoTabla.innerHTML = ''

    usuarios.forEach((usuario) => {
        const fila = document.createElement('tr')

        fila.innerHTML = `
            <td>${usuario.nombre}</td>
            <td>${usuario.apellidos}</td>
            <td>${usuario.email}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.pais}</td>
            <td>${usuario.tipo_cuenta}</td>
            <td><a href="detalle.html?id=${usuario.id}">Ver detalle</a></td>
        `
        cuerpoTabla.appendChild(fila)
    })
}

renderizarTabla()
