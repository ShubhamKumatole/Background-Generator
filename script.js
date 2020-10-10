var body = document.querySelector("body");
var v1 = document.querySelectorAll("input")[0];
var v2 = document.querySelectorAll("input")[1];
var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
function chgColor() {
	// body...
	body.style.background = "linear-gradient(90deg,"+ v1.value +","+v2.value+")";
	 // h3.textContent = "background-image : linear-gradient(90deg,"v1.value+","+v2.value");";
	 c1.textContent= v1.value;
	 c2.textContent= v2.value;
}
chgColor();
v1.addEventListener("input",chgColor);
v2.addEventListener("input",chgColor);

