//Random Numbers Like Rolling A Dice

let x;
let y;
let z;

document.getElementById('rollButton').onclick = function () {
	let x = Math.floor(Math.random() * 9) + 1;
	let y = Math.floor(Math.random() * 9) + 1;
	let z = Math.floor(Math.random() * 9) + 1;

	document.getElementById('xLabel').innerHTML = x;
	document.getElementById('yLabel').innerHTML = y;
	document.getElementById('zLabel').innerHTML = z;
};
