


let name = document.getElementById("name");

function checkAnswers(){
  let score = 0;
  quiz = document.forms.Quiz.elements;
  answer1 = quiz.colour.value;
  if (answer1 == "Blue"){

  score = score +1;
  }

answer2 = quiz.country.value;

if (answer2 == "Greece"){

  score = score +1;
 }
 alert ("Well done,your score was..." + score);
}


