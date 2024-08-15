function sleep(ms) {
	return new Promise(resovle => setTimeout(resolve, ms));
}

function takeDrink() {
// swithcing buttons to show
	document.getElementById("trap").style.visibility = "hidden";
	document.getElementById("hell").style.visibility = "visible";
	sleep(5000);
	document.getElementById("bait").style.display = "none";
	document.getElementById("test1").style.display = "block";
	document.getElementById("old").style.display = "block";
}

// trap btn shows the face.png and disables the elxiir.png
// when button is clicked it should redirect to another page
// suffer btn goes back to the beginnig/reboots the website
