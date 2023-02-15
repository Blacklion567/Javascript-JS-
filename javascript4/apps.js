const checkNumber = (n) => {
	if (n % 2 === 0) {
		console.log(n + ' is even');
	} else {
		console.log(n + ' is odd');
	}
};

checkNumber(8); // "8 is even"
checkNumber(21); // "21 is odd"
checkNumber(17); // "17 is odd"
checkNumber(10); // "10 is even"

let angle = 450;
let result = angle % 360;
console.log(result); // returns 90

const fruits = new Set(['apple','mango','orange','pineapple']);
fruits.add('banana');
console.log(fruits)