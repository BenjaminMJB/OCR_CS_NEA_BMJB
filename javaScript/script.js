function sideBarNav() {
	var x = document.getElementById("mySideBar");
	var y = document.getElementById("main");
	var z = document.getElementById("sideBarButton");
	console.log("1");
	if (z.innerHTML === "☰") {
		x.style.width = "500px";
		y.style.marginLeft = "500px";
		z.innerHTML = "X";
	}
	else {
		x.style.width = "0px";
		y.style.marginLeft = "0px";
		z.innerHTML = "☰";
	}
}