function changeProfile() {
	// call all functions to change profile
	NameToJob();
	educationToAchievements();
	oldToNewImage();
	changeBodyBackgroundColor();
}

function NameToJob() {
	document.getElementById("NumePrenume").innerHTML = "Inginer It";
}

function educationToAchievements() {
	// schimbare primul rand tabel
	var r1 = document.getElementById("realizare_r1");
	var p1 = document.getElementById("perioada_r1");
	var l1 = document.getElementById("link_r1");
	r1.innerHTML = "licenta";
	p1.innerHTML = "01.06.2024-24.09.2027";
	l1.innerHTML = "https://etti.utcluj.ro/finalizare-studii.html";

	// schimbare al doilea rand tabel
	var r2 = document.getElementById("realizare_r2");
	var p2 = document.getElementById("perioada_r2");
	var l2 = document.getElementById("link_r2");
	r2.innerHTML = "Master";
	p2.innerHTML = "16.06.2028";
	l2.innerHTML = "https://www.utcluj.ro/universitatea/educatie/master/";

	// schimbare al treilea rand tabel
	var r3 = document.getElementById("realizare_r3");
	var p3 = document.getElementById("perioada_r3");
	var l3 = document.getElementById("link_r3");
	r3.innerHTML = "Voluntariat";
	p3.innerHTML = "01.06.2024-24.09.2024";
	l3.innerHTML = "https://osut.ro/info-studenti/oportunitati/oportunitati-de-voluntariat";
}

function oldToNewImage() {
	var img = document.getElementById("pozaprofil");
	img.src = "./imagine2.jpg";
	img.style.opacity = 1;
	img.style.borderWidth = '3px';
    img.style.borderStyle = 'dashed';
    img.style.borderColor = '#a0a3f2';
	img.style.right='10px'
	
	
	
}

function changeBodyBackgroundColor() {
	var body = document.getElementById("body");
	body.style.backgroundColor  = "#9681d6";
	body.style.fontFamily="Arial";
	
}

}
function AddNewItem() {
	// call all functions
	addBirthDate();
	createEmailTextBox();
}

function addBirthDate() {
	var tag = document.createElement("h3");
	tag.id = "date-years";
	var text = document.createTextNode("17-08-2003");
	var element = document.getElementById("birthdate");
	tag.appendChild(text);
	element.appendChild(tag);
	document.getElementById("birthdate").addEventListener("mouseover", birthToYears);
	document.getElementById("birthdate").addEventListener("mouseout", handleMouseOut);
}

function birthToYears() {
	var currentTime = new Date();
	var vv = document.getElementById("date-years");
	var year = currentTime.getFullYear()
	var numYears = Number(year) - Number(vv.innerHTML.slice(-4));
	vv.innerHTML = "Varsta: " + numYears;
}

function handleMouseOut() {
		document.getElementById("date-years").innerHTML = '17-08-2003';
	}

function createEmailTextBox() {
	var input = document.createElement("input");
	input.type = "email";
	input.id = "email-box";
	input.value = "anatoma037@gmail.com";
	input.style.width = "300px";
	input.addEventListener("mouseover", validateEmail);
	document.getElementById("birthdate").appendChild(input);
}

function validateEmail() {
	var input = document.getElementById("email-box");
  	var validRegex = /^\S+@\S+\.\S+$/;
  	if (input.value.match(validRegex)) {
  		console.log("Valid email address!");

  	} else {
    	alert("Invalid email address!");
  	}
}