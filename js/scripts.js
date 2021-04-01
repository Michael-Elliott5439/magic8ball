//Create Elements;
const form = document.createElement('form');
const askButton = document.createElement('button');

const labelQuestion = document.createElement('label');
const inputQuestion = document.createElement('input');

const answers = document.createElement('div');
const replacementQuestion = document.createElement('p');

answers.id = 'answers';


//Append Element;
document.body.appendChild(form);

form.appendChild(labelQuestion);
form.appendChild(inputQuestion);

document.body.appendChild(askButton);


//Inner HTML;
labelQuestion.innerHTML = 'Ask me anything!';
askButton.innerHTML = 'Ask';


askButton.addEventListener('click', function(){

    console.log('Asking...');

    ask(inputQuestion.value);
})

function ask(question){
    const randomNumber = getRandomInt(1,11);
    console.log(question);
    console.log('Answer: ' + randomNumber);

    askButton.remove();
    inputQuestion.remove();

    document.body.appendChild(replacementQuestion);
    replacementQuestion.innerHTML = 'You asked: ' + question;

    document.body.appendChild(answers);
    answers.innerHTML = `<img width="400px" src="resources/magic8ball_` + randomNumber + `.png">`;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }