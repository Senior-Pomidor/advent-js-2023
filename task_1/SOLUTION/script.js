const $minutesInput = document.querySelector('#minutesInput')
const $secondsInput = document.querySelector('#secondsInput')
const $startBtn = document.querySelector('#startBtn')
const $settingsBtn = document.querySelector('#settingsBtn')
const $ring = document.querySelector('.ring')

let interval = null
let isSettingMode = false

const updateSettingMode = isOn => {
    isSettingMode = isOn

    if (isOn) {
        $minutesInput.removeAttribute('disabled')
        $secondsInput.removeAttribute('disabled')

        return
    }

    $minutesInput.setAttribute('disabled', true)
    $secondsInput.setAttribute('disabled', true)
}

const stopTimer = () => {
    clearInterval(interval)
    interval = null
    $startBtn.textContent = 'start'
}

const startTimer = () => {
    updateSettingMode(false)

    let minutes = parseInt($minutesInput.value)
    let seconds = parseInt($secondsInput.value)
    let totalSeconds = parseInt(minutes * 60 + seconds)

    if (!totalSeconds) {
        
        stopTimer()

        return
    }

    $startBtn.textContent = 'pause'
    $ring.classList.remove('ending')

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
            $ring.classList.add('ending')
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

$startBtn.addEventListener('click', toggleTimer)
$settingsBtn.addEventListener('click', () => {
    updateSettingMode(!isSettingMode)
})


const restrictToInteger = evt => {
    evt.target.value = evt.target.value.replace(/[^\d]/g, '');
}

$minutesInput.addEventListener('input', restrictToInteger)
$secondsInput.addEventListener('input', restrictToInteger)
