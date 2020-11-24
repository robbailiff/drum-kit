document.addEventListener('keydown', function(e) {
    let key = e.code;
    playAudio(key);
})

function playAudio (key) {
    togglePlaying(key);
    let sound = document.querySelector(`audio.${key}`);
    sound.currentTime = 0;
    sound.play();
}

function togglePlaying (key) {
    let keyPress = document.querySelector(`div.${key}`)
    keyPress.classList.add('playing');
    keyPress.addEventListener('transitionend', function() {
        keyPress.classList.remove('playing');
    });
}

