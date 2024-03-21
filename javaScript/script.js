function sideBarNav() {
	var x = document.getElementById("mySideBar");
	var y = document.getElementById("main");
	var z = document.getElementById("sideBarButton");
	var a = "500px"
	console.log("1");
	if (z.innerHTML === "☰") {
		x.style.width = a;
		y.style.marginLeft = a;
		z.innerHTML = "X";
	}
	else {
		x.style.width = "0px";
		y.style.marginLeft = "0px";
		z.innerHTML = "☰";
	}
}