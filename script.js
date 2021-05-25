const meals = {
	breakfast: ['cereal', 'toast', 'fry-up'],
	lunch: ['sandwiches', 'wraps', 'salad'],
	dinner: ['pizza', 'steak', 'pasta']
}

const generateRandNum = () => Math.floor(Math.random * 3);
let returnedMeals = [];

for (let meal in meals) {
	switch(meal){
		case 'breakfast':
			returnedMeals.push(`For breakfast we have ${meals[meal][generateRandNum()]},`);
			break;
		case 'lunch':
			returnedMeals.push(`For lunch we have ${meals[meal][generateRandNum()]},`);
			break;
		case 'dinner':
			returnedMeals.push(`And for dinner we have ${meals[meal][generateRandNum()]}.`);
			break;
		default:
			returnedMeals.push('There has been an error');
	}
}
