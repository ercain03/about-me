var userName = prompt('Hello friend, what is your name?');
console.log('The users name is ' + userName);

alert('What\'s up ' + userName + '? Let\'s play a guessing game about me!');

var userResponse = prompt('Do I have a brother?');
console.log('userResponse 1: ' + userResponse);

if (userResponse.toLowerCase() === 'y' || userResponse.toUpperCase() === 'YES') {
  alert('Right on ' + userName + '! :)');
} else if (userResponse.toLowerCase() === 'n' || userResponse.toUpperCase() === 'NO') {
  alert('Try Again ' + userName + '! :/');
} else {
  alert('That is not an acceptable answer ' + userName + '! :/');
};

var userResponse2 = prompt(userName + ' , Do I have a belly button?');
console.log('userResponse 2: ' + userResponse2);
if (userResponse2.toLowerCase() === 'y' || userResponse2.toUpperCase() === 'YES') {
  alert('Got em ' + userName + '! :)');
} else if (userResponse2.toLowerCase() === 'n' || userResponse2.toUpperCase() === 'NO') {
  alert('C\'mon ' + userName + '! :/');
} else {
  alert('That is not an acceptable answer ' + userName + '! :/');
};

var userResponse3 = prompt(userName + ' , What is my favorite color?');
console.log('userResponse 3: ' + userResponse3);
if (userResponse3.toLowerCase() === 'purple' || userResponse3.toUpperCase() === 'PURPLE') {
  alert('You\'re psychic ' + userName + '! :)');
} else {
  alert('You are the weakest link, goodbye ' + userName + '! :/');
};

var userResponse4 = prompt(userName + ' , What is my favorite city?');
console.log('userResponse 4: ' + userResponse4);
if (userResponse4.toLowerCase() === 'san francisco' || userResponse4.toUpperCase() === 'SAN FRANCISCO') {
  alert('You\'re so intelligent ' + userName + '! :)');
} else if (userResponse4.toLowerCase() === 'sf' || userResponse4.toUpperCase() === 'SF') {
  alert('You bet your bottom ' + userName + '! :/');
} else {
  alert('Maybe I was wrong about you ' + userName + '! :/');
};

var userResponse5 = prompt(userName + ' , can you tell me my favorite number? Hint: between 1-10');
console.log('userResponse 5: ' + userResponse5);
if(userResponse5 === '3') {
  alert('You know your stuff ' + userName + '! :)');
} else {
  alert('It\'s okay maybe next time ' + userName + '! :/');
};
