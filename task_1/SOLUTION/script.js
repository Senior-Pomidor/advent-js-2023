const $minutesInput = document.querySelector('#minutesInput')
const $secondsInput = document.querySelector('#secondsInput')
const $toggleTimerBtn = document.querySelector('#toggleTimerBtn')
const $settingsBtn = document.querySelector('#settingsBtn')

let interval = null

const stopTimer = () => {
    clearInterval(interval)
    interval = null
    $toggleTimerBtn.textContent = 'start'
}

const startTimer = () => {
    let minutes = parseInt($minutesInput.value)
    let seconds = parseInt($secondsInput.value)
    let totalSeconds = parseInt(minutes * 60 + seconds)

    if (!totalSeconds) {
        stopTimer()

        return
    }

    $toggleTimerBtn.textContent = 'pause'

    interval = setInterval(() => {
        totalSeconds--

        minutes = Math.floor(totalSeconds / 60)
        seconds = totalSeconds % 60

        $minutesInput.value = String(minutes).length < 2
            ? '0' + minutes
            : minutes

        $secondsInput.value = String(seconds).length < 2
            ? '0' + seconds
            : seconds

        if (totalSeconds == 0) {
            stopTimer()
        }
    }, 1000)
}

const toggleTimer = () => {
    if (interval) {
        stopTimer()

        return
    }

    startTimer()
}

$toggleTimerBtn.addEventListener('click', toggleTimer)


const restrictToInteger = evt => {
    evt.target.value = evt.target.value.replace(/[^\d]/g, '');
}

$minutesInput.addEventListener('input', restrictToInteger)
$secondsInput.addEventListener('input', restrictToInteger)

