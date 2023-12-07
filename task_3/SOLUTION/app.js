document.addEventListener('keydown', evt => {
    const key = evt.key.toUpperCase()
    const $btn = document.querySelector(`[data-key='${key}']`)

    if ($btn) {
        $btn.classList.add('jiggle')
    }
})

document.addEventListener('keyup', evt => {
    const key = evt.key.toUpperCase()
    const $btn = document.querySelector(`[data-key='${key}']`)

    if ($btn) {
        $btn.classList.remove('jiggle')
    }
})
