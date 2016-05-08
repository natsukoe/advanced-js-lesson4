var age = 'b';

// Version 1: Half way conversion

if (age < 16) {
	console.log('You can go to school!');
} else if (age >= 16) {
	switch (age) {
	case 16: case 17:
		console.log('You can drive!');
		break;
	case 18: case 19: case 20:
		console.log('You can vote!');
		break;
	case 21: case 22: case 23: case 24:
		console.log('You can drink alcohol');
		break;
	case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34:
		console.log('You can rent a car!');
		break;
	case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: case 58: case 59: case 60: case 61:
		console.log('You can be a president!');
		break;
	}
	if (age >= 62) {
		console.log('You can collect social security now.')
	}
}
else {
	console.log('Please enter a correct age value.');
}

// Version 2: Tedious, non-elegant and semi-breaking way

switch (age) {
	case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15:
		console.log('You can go to school!');
		break;
	case 16: case 17:
		console.log('You can drive!');
		break;
	case 18: case 19: case 20:
		console.log('You can vote!');
		break;
	case 21: case 22: case 23: case 24:
		console.log('You can drink alcohol');
		break;
	case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34:
		console.log('You can rent a car!');
		break;
	case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: case 58: case 59: case 60: case 61:
		console.log('You can be a president!');
		break;
	default:
		console.log('You can collect social security now.');
}

// Version 3: Most elegant yet somewhat cheating way

switch(true) {
	case (age < 16):
		console.log('You can go to school!');
		break;
	case (age >= 16 && age < 18):
		console.log('You can drive!');
		break;
	case (age >= 18 && age < 21):
		console.log('You can vote!');
		break;
	case (age >= 21 && age < 25):
		console.log('You can drink alcohol!');
		break;
	case (age >= 25 && age < 35):
		console.log('You can rent a car!');
		break;
	case (age >= 35 && age < 62):
		console.log('You can be a president!');
		break;
	case (age >= 62):
		console.log('You can collect social security now.');
		break;
	default:
		console.log('Please enter a correct age value');
}