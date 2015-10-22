

var play = document.getElementById('play');
var sound = document.getElementById('sound');

function playSound() {
	if(sound.paused == false) {
		sound.pause();
		sound.currentTime = 0;
		play.innerHTML = "&#9654;";
	} else {
		sound.play();
		play.innerHTML = "&#10074;&#10074;";
	}
	

}

play.addEventListener('click', playSound);
