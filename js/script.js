//next button//
function Function() {
  let x = document.getElementById("page1");
  let backButton = document.getElementById("backbtn")
  let page2 = document.getElementById("page2")
  x.style.display = "none";
  page2.style.display = "block";
  backButton.style.display = "block"; 
}


//back button//
function backFunction() {
  let x = document.getElementById("page1");
  let backButton = document.getElementById("backbtn");
  let page2 = document.getElementById("page2");
  if (x.style.display === "none") {
    x.style.display = "block";
    backButton.style.display = "none";
    page2.style.display = "none";

  } else {
    x.style.display = "none";
      
  }
}
function myPanda() {
    
  let x = document.getElementById("page3");
  let page2 = document.getElementById("page2");
  let backButton = document.getElementById("backbtn");
  x.style.display = "block";
  page2.style.display = "none";
  backButton.style.display = "none"; 
}


//menu function//
function myFunction() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



//Play pause mute button//
let audio, playbtn, mutebtn, seek_bar;
function initAudioPlayer(){
	audio = new Audio();
	audio.src = "../sound/track_storm/track_storm.mp3"
	audio.loop = true;
	audio.play();

	// Set object references
	playbtn = document.getElementById("playpausebtn");
	mutebtn = document.getElementById("mutebtn");
	// Add Event Handling

	playbtn.addEventListener("click",playPause);
	mutebtn.addEventListener("click", mute);

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
	function mute(){
		if(audio.muted){
		    audio.muted = false;
		    mutebtn.style.background = "url(../billeder/storm_sound_on_ikon.svg) no-repeat";
	    } else {
		    audio.muted = true;
		    mutebtn.style.background = "url(../billeder/storm_mute_ikon.svg) no-repeat";
	    }
	}
}
window.addEventListener("load", initAudioPlayer);