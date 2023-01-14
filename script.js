let wordHad = document.getElementById("wordHad")
let btnHas = document.getElementById('btnHas')
let btnHave = document.getElementById('btnHave')
let btnHad = document.getElementById('btnHad')
let btnTranslate = document.getElementById('translate')

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnTranslate.innerHTML = 'Tive minha cota de areia jogada em minha face mas sobrevivi. Nós somos os campeões...'
    btnTranslate.style.boxShadow = '1px 1px 1px black'
    setTimeout(function()
    {
        btnTranslate.innerHTML = 'Translate'
        btnTranslate.style.boxShadow = '2px 2px 3px black'
    }, 6000)

})

btnHad.addEventListener('click', function() {
    let songAudio = document.getElementById('song')
    songAudio.play()
    let audio = document.getElementById('click')
    audio.play()
    wordHad.innerHTML = 'Had'
    wordHad.style.color = 'lime'
    btnHad.style.background = 'lawngreen'
    btnHad.style.color = 'green'
    btnHad.disabled = 'true'
    btnHas.disabled = 'true'
    btnHave.disabled = 'true'
})

btnHas.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordHad.innerHTML = 'has'
    wordHad.style.color = 'red'
    btnHas.style.background = 'red'
    btnHas.disabled = 'true'
})

btnHave.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordHad.innerHTML = 'have'
    wordHad.style.color = 'red'
    btnHave.style.background = 'red'
    btnHave.disabled = 'true'
})