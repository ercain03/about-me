var userName = prompt('Hello friend, what is your name?');
console.log('The users name is ' + userName);

alert('What\'s up ' + userName + '? Let\'s play a guessing game about me! please answer yes or no to the following questions.');

var numberTally = 0;
var userQuestions = ['Do I have a brother?', userName + ' , Do I have a belly button?', userName + ' , Do I love ice cream?', userName + ' , is Los Angeles my favorite city?', userName + ' , Is purple my favorite color?'];
var correctA = ['y','YES','n','NO',3,];

function broQs() {
  for (var i = 0; i < userQuestions.length; i++) {
    var userResponse = prompt(userQuestions[i]);
    console.log('The users response is: ' + userResponse);
    if (userResponse.toLowerCase() === correctA[0] || userResponse.toUpperCase() === correctA[1]) {
      alert('Right on ' + userName + '! :)');
      numberTally += 1;
    } else if (userResponse.toLowerCase() === correctA[2] || userResponse.toUpperCase() === correctA[3]) {
      alert('Try Again ' + userName + '! :/');
    } else {
      alert('That is not an acceptable answer ' + userName + '! :/');
    }
  };
}

broQs();

alert('Okay, see now that wasn\'t to hard. But you\'re not finished yet.' );

var funFactor = prompt('Are you having fun yet? yes or no?');
console.log('The users answer is ' + funFactor);

function bellBq() {
  if (funFactor.toLowerCase() === correctA[0] || funFactor.toUpperCase() === correctA[1]) {
    alert('Great! ' + userName + ' I\'m so glad you\'re enjoying yourself.');
  } else if (funFactor.toLowerCase() === correctA[2] || funFactor.toUpperCase() === correctA[3]) {
    alert('Aww ' + userName + ' I\'m sorry to hear that.');
  } else {
    alert('Please follow directions ' + userName + ', and put an acceptable answer.');
  }
}

bellBq();

var myqArry = ['What is my favorite number? Hint: it\'s a number between 1-10.','Can you guess what ethnicity I am?'];
var i = 0;

function favNum(){
  while (i <= 3) {
    var userQuestion2 = parseInt(prompt (myqArry [0]));
    console.log('The users favorite answer is ' + userQuestion2);
    if (userQuestion2 === correctA[4]){
      alert(userName + ' , you got it right!');
      numberTally += 1;
      break;
    } else if (userQuestion2 > correctA[4]) {
      alert(userName + ' , your guess is to high.');
    } else if (userQuestion2 < correctA[4]) {
      alert(userName + ' , your guess is to low.');
    } else {
      alert('Please enter a real number.');
    }
    i++;
  }
}

favNum();

alert('Now, for your final question.');

var finalQuestion = prompt('Are you ready?');
console.log('The users response is: ' + finalQuestion);

function uFunq() {
  if (funFactor.toLowerCase() === correctA[0] || funFactor.toUpperCase() === correctA[1]) {
    alert('Drum roll please!!!!');
  } else if (funFactor.toLowerCase() === correctA[2] || funFactor.toUpperCase() === correctA[3]) {
    alert('Don\'t be afraid you got this.');
  } else {
    alert('Please enter a yes or no.');
  }
}

uFunq();

var myEthnicity = ['AFRICAN-AMERICAN', 'PUERTO RICAN', 'GERMAN'];
var i = 0;

function ethnQ() {
  while (i <= 5) {
    var userQuestion3 = prompt((myqArry[1]));
    console.log('The users response is: ' + userQuestion3);
    if (userQuestion3.toUpperCase() === myEthnicity[0]){
      alert('you got it right.');
      numberTally += 1;
      break;
    } else if (userQuestion3.toUpperCase() === myEthnicity[1]){
      alert('you got it right.');
      numberTally += 1;
      break;
    } else if (userQuestion3.toUpperCase() === myEthnicity[2]){
      alert('you got it right.');
      numberTally += 1;
      break;
    } else {
      alert('please try again.');
    }
    i++;
  }
}

ethnQ();

alert('I am racially mixed with ' + myEthnicity[0] + ', ' + myEthnicity[1] + ', ' + myEthnicity[2]);

function totalG() {
  if (numberTally >= 5){
    alert('Good job, ' + userName + ' your results are ' + numberTally + ' out of 7 questions correct. You know me pretty well.');
  } else {
    alert('Your results are ' + numberTally + ' out of 7 questions, you don\'t know me at all!!');
  }
}

totalG();
