const audioPlayers = document.querySelectorAll('.audio-player');
const infoBtns = document.querySelectorAll('.info-btn');
const checkbox = document.getElementById('chbx-audio');

function updateVisibility() {
    if (checkbox.checked) {
        audioPlayers.forEach(player => {
            player.classList.remove('hidden');
        });
        infoBtns.forEach(btn => {
            btn.classList.add('hidden');
        });
    } else {
        audioPlayers.forEach(player => {
            player.classList.add('hidden');
        });
        infoBtns.forEach(btn => {
            btn.classList.remove('hidden');
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const savedState = localStorage.getItem('audioCheckboxState');
    if (savedState !== null) {
        checkbox.checked = (savedState === 'true');
    } else {
        checkbox.checked = false;
    }
    updateVisibility();
});

checkbox.addEventListener('change', () => {
    localStorage.setItem('audioCheckboxState', checkbox.checked);
    updateVisibility();
});

audioPlayers.forEach(player => {
    const audio = player.querySelector('.audio');
    const playButton = player.querySelector('.play-button');
    const pauseButton = player.querySelector('.pause-button');

    playButton.addEventListener('click', () => {
        // Reinicia o áudio para o começo
        audio.currentTime = 0;

        audioPlayers.forEach(otherPlayer => {
            const otherAudio = otherPlayer.querySelector('.audio');
            if (otherAudio !== audio) {
                otherAudio.pause();
                otherPlayer.querySelector('.play-button').style.display = 'block';
                otherPlayer.querySelector('.pause-button').style.display = 'none';
            }
        });

        audio.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'block';
    });

    pauseButton.addEventListener('click', () => {
        audio.pause();
        playButton.style.display = 'block';
        pauseButton.style.display = 'none';
    });

    audio.addEventListener('ended', () => {
        playButton.style.display = 'block';
        pauseButton.style.display = 'none';
    });
});