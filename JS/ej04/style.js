setInterval(() => {
    const ahora = new Date()
    const elementosNow = document.querySelectorAll('.now')
    elementosNow.forEach((elemento) => {
        elemento.textContent = ahora.toLocaleTimeString()
    })
}, 1000)
