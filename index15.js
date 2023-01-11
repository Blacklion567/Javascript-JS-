// switch = statement that examines a value
//          for a match against many case clauses.
//          More efficient that many "else if" statements

let grade = '82';

/*
switch (grade) {
	case 'A':
		console.log('You did great!');
		break;
	case 'B':
		console.log('You did good!');
		break;
	case 'C':
		console.log('You did okay!');
		break;
	case 'D':
		console.log('You passed....barely!');
		break;
	case 'F':
		console.log('YOU FAILED!');
		break;
	default:
		console.log(grade, 'is not a letter grade! ');
}
*/
switch (true) {
	case grade >= 90:
		console.log('You did great!');
		break;
	case grade >= 85:
		console.log('You did good!');
		break;
	case grade >= 80:
		console.log('You did okay!');
		break;
	case grade >= 75:
		console.log('You passed....barely!');
		break;
	case grade >= 74:
		console.log('YOU FAILED!');
		break;
	default:
		console.log(grade, 'is not a letter grade! ');
}
