const meals = {
	breakfast: ['cereal', 'toast', 'fry-up'],
	lunch: ['sandwiches', 'wraps', 'salad'],
	dinner: ['pizza', 'steak', 'pasta']
};

function generateRandNum(){
	return Math.floor(Math.random() * 3);
};

let returnedMeals = [];

for (let meal in meals) {
	let generatedIndex = generateRandNum();
	switch(meal){
		case 'breakfast':
			returnedMeals.push(`For breakfast we have ${meals[meal][generatedIndex]},`);
			break
		case 'lunch':
			returnedMeals.push(`For lunch we have ${meals[meal][generatedIndex]},`);
			break
		case 'dinner':
			returnedMeals.push(`And for dinner we have ${meals[meal][generatedIndex]}.`);
			break
		default:
			returnedMeals.push('There has been an error');
	}
}

const displayMsg = () => {
	console.log(returnedMeals.join(' '));
}

displayMsg();