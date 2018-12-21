var music = document.getElementById('edenOfTheEast');
const japName = document.getElementsById('japName');
var audioSource = (new ThreeAudio.Source()).load(music);
var audioTextures = new ThreeAudio.Textures(renderer, audioSource);
var audioMaterial = new ThreeAudio.Material(audioTextures, vertexShader, fragmentShader);	


function playAudio() {
  if (music.paused) {
    music.play();
    pButton.className = "";
    pButton.className = "pause";
    motion();
  } else {
    music.pause();
    pButton.className = "";
    pButton.className = "play";
    motionStop();
  }
}

function setVolume(volume) {
    music.volume = volume;
}

japName.addEventListener('click', () => {
    japName.style.color = '#000000';
});

