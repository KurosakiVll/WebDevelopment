const tiempoInput = document.getElementById('tiempo')
const btnInicio = document.getElementById('inicio')
const btnPosponer = document.getElementById('posponer')
const btnDetener = document.getElementById('detener')
const mensajeDiv = document.getElementById('mensaje')

let temporizador = null
let tiempoRestante = 0
let alarmaSonando = false

btnInicio.addEventListener('click', () => {
    const tiempo = parseInt(tiempoInput.value, 10)
    if (isNaN(tiempo) || tiempo <= 0) {
        mensajeDiv.textContent = 'Por favor, introduce un tiempo válido.'
        return
    }

    tiempoRestante = tiempo
    mensajeDiv.textContent = `La alarma sonará en ${tiempo} segundos.`
    btnPosponer.disabled = false
    btnDetener.disabled = false

    temporizador = setInterval(() => {
        tiempoRestante--
        if (tiempoRestante <= 0) {
            clearInterval(temporizador)
            alarmaSonando = true
            mensajeDiv.textContent = '¡La alarma está sonando!'
            playAlarma()
        } else {
            mensajeDiv.textContent = `Tiempo restante: ${tiempoRestante} segundos.`
        }
    }, 1000)
})

btnPosponer.addEventListener('click', () => {
    if (alarmaSonando) {
        alarmaSonando = false
        mensajeDiv.textContent = 'Alarma pospuesta por 10 segundos.'
        tiempoRestante = 10
        temporizador = setInterval(() => {
            tiempoRestante--
            if (tiempoRestante <= 0) {
                clearInterval(temporizador)
                alarmaSonando = true
                mensajeDiv.textContent = '¡La alarma está sonando!'
                playAlarma()
            } else {
                mensajeDiv.textContent = `Tiempo restante: ${tiempoRestante} segundos.`
            }
        }, 1000)
    }
})

btnDetener.addEventListener('click', () => {
    clearInterval(temporizador)
    alarmaSonando = false
    mensajeDiv.textContent = 'La alarma se ha detenido.'
    stopAlarma()
})

let audio = new Audio()
audio.loop = true

function playAlarma() {
    audio.play()
}

function stopAlarma() {
    audio.pause()
    audio.currentTime = 0
}
