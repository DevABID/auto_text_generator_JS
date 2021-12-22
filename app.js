
const text = "Hello, Vanila Javascript Programmers!!!";

let index = 0;

function go(){
	document.body.innerText = text.slice(0,index);

	index++;

	if (index > text.length - 1) {

		index = 0;
	}
}

setInterval(go,80);