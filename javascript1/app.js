/*let saveEl = document.getElementById("save-el")
let countEl = document.getElementById('count-el');
let count = 0;

function incremete() {
	count += 1;
	countEl.innerText = count;
}

function decrease() {
	count -= 1;
	countEl.innerText = count;
}	

function reset() {
	count = 0;
	countEl.innerText = count;
}
function save() {
	console.log(count)
}*/


document.getElementById('submite').onclick = function () {
	x = document.getElementById("First-number").value;
	y = document.getElementById("Second-number").value;
	z = document.getElementById("Third-number").value;

	finalresult = (x * y) + z;
	document.getElementById('Final-result').innerText = finalresult;
};
