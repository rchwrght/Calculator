var a = 0;
var b = 0;
var c = 0;
var isA = true;

var p = document.querySelector("p");

function number (num) {
	if(isA){
		a = a + "" + num;
		console.log("a is " + a);
		return a;
	} else {
		b = b + "" + num;
		console.log("b is " + b);
		return b;
	}
}

function moveToB(sign) {
	a = a + sign;
	isA = false;
}

function equals(){
	if(a[a.length-1] == '+'){
		c = a + b;
		p.textContent = c;
	} else if (a[a.length-1] == '-') {
		c = a - b;
		p.textContent = c;
	}
}


