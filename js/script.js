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

let audio, playbtn, mutebtn;
function initAudioplayer(){
    audio = new Audio();
    audio.src ="../sound/sommer_sound/sommer_sound_mixdown.mp3";
    audio.loop = true;
    audio.play ();
    
    //set objevt refences//
    playbtn = document.getElementById("playpausebtn");
    mutebtn = document.getElementById("mutebtn");
    
    //Event handling//
    playbtn.addEventListener("click",playpause)
    mutebtn.addEventListener("click",mute)
    
     // Functions
	function playPause(){
		if(audio.paused){
		    audio.play();
		    playbtn.style.background = "url(../billeder/storm_pause_ikon.svg) no-repeat";
	    } else {
		    audio.pause();
		    playbtn.style.background = "url(../billeder/storm_play_ikon.svg) no-repeat";
	    }
    
}

window.addEventListener("load", initAudioplayer);
