var content = document.getElementById("nav-content");
var remove= document.getElementById("remove");
var links = document.getElementById("nav-links");
var remove2 = document.getElementById("removeButton");

content.style.display = "none";
links.style.display = "none";

function navBar(){
	var a = 1;
	if(a = 1) {
		content.style.display = "inline-block";
		remove.style.display = "inline-block";
	}
}

function removeBar(){
	var b = 2;
	if (b = 2) {
		content.style.display = "none";
		remove.style.display = "inline-block";
	}
}

function navLinks(){
	var c = 3;
	if(c = 3) {
		links.style.display = "inline-block";
		remove.style.display = "inline-block";
	}
}

function removeLinks(){
	var d = 4;
	if (d = 4) {
		links.style.display = "none";
		removeButton.style.display = "inline-block";
	}
}