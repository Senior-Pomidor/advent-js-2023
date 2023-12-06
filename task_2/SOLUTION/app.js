


let audio = null


document.addEventListener('click', evt => {
    const audioKey = evt.target.dataset.audioKey

    if (!audioKey) {
        return
    }

    audio?.pause()

    audio = new Audio(`./audio/key-${audioKey}.mp3`)

    audio.play()
})
