var userName = prompt('Hello friend, what is your name?');
console.log('The users name is ' + userName);

alert('What\'s up ' + userName + '? Let\'s play a guessing game about me! please answer yes or no to the following questions.');

var userQuestions = ['Do I have a brother?', userName + ' , Do I have a belly button?', userName + ' , Do I love ice cream?', userName + ' , is Los Angeles my favorite city?', userName + ' , Is 3 my favorite color?'];

for (var i = 0; i < userQuestions.length; i++) {
  var userResponse = prompt(userQuestions[i]);
  if (userResponse.toLowerCase() === 'y' || userResponse.toUpperCase() === 'YES') {
    alert('Right on ' + userName + '! :)');
  } else if (userResponse.toLowerCase() === 'n' || userResponse.toUpperCase() === 'NO') {
    alert('Try Again ' + userName + '! :/');
  } else {
    alert('That is not an acceptable answer ' + userName + '! :/');
  }
};
