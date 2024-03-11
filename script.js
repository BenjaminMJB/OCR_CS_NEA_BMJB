function sideBarNav() {
	var x = document.getElementById("mySideBar");
	var y = document.getElementById("main");
	var z = document.getElementById("sideBarButton");
	console.log("1");
	if (z.innerHTML === "☰") {
		x.style.width = "250px";
		y.style.marginLeft = "250px";
		z.innerHTML = "X";
		console.log("2");
	}
	else {
		x.style.width = "0px";
		y.style.marginLeft = "0px";
		z.innerHTML = "☰";
		console.log("3");
	}
}