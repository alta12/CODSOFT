
const disp = document.getElementById("display");

function display(e) {
	const button = document.querySelectorAll("button");
	let values = e;
	if(e=="=") {
		disp.innerHTML=eval(disp.textContent);
	}
	else if(e=="x") {
		disp.innerHTML="";
	}
	else {
		disp.innerHTML+=values;
	}
} 