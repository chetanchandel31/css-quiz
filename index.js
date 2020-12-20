const readlineSync = require('readline-sync');
const chalk = require('chalk');

let intName = readlineSync.question('whats your name? ');//take input

const name = intName.charAt(0).toUpperCase() + intName.substr(1);//some processing

let score = 0;

let quesAnswers = [
  {
    question: "In the following code snippet, what value is given for the bottom-right corner?\n{\nborder-radius: 10px 20px 30px 40px;\n} \n a. 20 \n b. 10 \n c. 30 \n d. 40 \n",
    answer: 'c',
  },
  {
    question: "When the \"float\" property is used with the values of \"left\" or \"right\", anything else that lives in the containing element will:\n a. be moved below the element associated with the \"float\" property \n b. flow around the element associated with the \"float\" property\n c. become invisible\n d.  move above the element associated with the \"float\" property \n",
    answer: 'b',
  },
  {
    question: 'In order to make the z-index property work you must: \n a. clear floats \n b. use floating \n c. use the overflow property \n d. position elements \n',
    answer: 'd'
  },
  {
    question: 'In "position" property, what is the purpose of the "relative" value? \n a. it puts the element relative to the normal flow \n b. it puts the element relative to the containing block \n c. it puts the element relative to the browser window \n d. none \n',
    answer: 'a'
  },
  {
    question: 'Which of these is a valid CSS3 transformation statement? \n a. skip() \n b. scale() \n c. simulate() \n d. modify() \n',
    answer: 'b'
  }
]

const highScoreHolders = [
  {
    name: 'dragon-warrior',
    score: 19
  },
  {
    name: 'pikachu',
    score: 12
  }
]

function checkHighScore () {
  for (var i = 0; i<highScoreHolders.length; i++) {
    if (score > highScoreHolders[i].score) {
      console.log(`Congrats you have beaten ${highScoreHolders[i].name}'s highscore of ${highScoreHolders[i].score} points.`);
    }
  }
}

function playQuiz (question, corrAnswer, quesNum) {
  let answer = readlineSync.question(`Q${quesNum}. ${question}`);
    
  if (answer === corrAnswer) {
    console.log(chalk.rgb(0, 255, 0)("Yes, that's the correct answer."));
    score += 4;
  } else {
    console.log(chalk`{rgb(255, 0, 0) Sorry, that's a wrong answer. The correct answer was "${corrAnswer}".}`);
    score -= 1;
  }
  console.log(`Your current score is ${chalk.black.bold.bgYellow(' '+score+' ')}.`);
  console.log('------------------------------------------------------');
}

//actual execution
console.log(chalk`{rgb(10, 100, 200) Hey ${name}, lets start our CSS quiz.}`);

quesAnswers.map((obj, i) => playQuiz(obj.question, obj.answer, i+1));

console.log(`The quiz is over. ${name}'s final score is ${chalk.black.bold.bgCyanBright(' '+score+' ')} points.`);

checkHighScore();