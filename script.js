const myAssignment = document.getElementById("myAssignment");
const questionBox = document.getElementById('questionBox');
const myQuestion = document.getElementById('myQuestion');
const answerBox = document.getElementById('answerBox');
const resultBox = document.getElementById('resultBox');

let counter = 0;
let sound = new Audio()

function makeQuestion() {
  myQuestion.innerHTML = quiz[counter].question;
  answerBox.innerHTML = "";
  for(let i = 0; i< quiz[0].answers.length; i++){
    let value = i;
    let li = document.createElement('li');
    li.innerHTML = quiz[counter].answers[value].answer;
    answerBox.appendChild(li);
    li.feedback = quiz[counter].answers[value].feedback
    li.addEventListener('click', evaluate);
  }
}

function evaluate(evt) {

    if (evt.target.feedback == true)
    {
      feedback.src = "img/Goed.png"
      sound.src = "sound/True.wav";
      sound.play();
      counter++;
    }else{
      feedback.src = "img/Fout.png"
      sound.src = "sound/False.wav";
      sound.play();
    }
    window.setTimeout(waiting, 1000)

    makeQuestion();
  }

  function waiting(){
    feedback.src = "img/Niks.png";
    myAssignment.innerHTML = "";
  }

function finishQuiz() {

}

makeQuestion();
