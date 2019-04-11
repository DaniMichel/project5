function Function() {
  let x = document.getElementById("page1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



function myFunction() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//Play pause mute button//

let audio, playbtn, seek_bar;
function initAudioplayer(){
    audio = new Audio();
    audio.src ="../sound/sommer_sound/sommer_sound_mixdown.mp3";
    audio.loop = true;
    audio.play ();
}
window.addEventListener("load", initAudioplayer);
