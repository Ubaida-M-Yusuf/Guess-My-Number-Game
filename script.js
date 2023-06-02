"use strict";

let correctNumber=Math.trunc(Math.random()*20)+1;
console.log(correctNumber);

let score=20;
let highScore=0;

const displayMessage= function(message) {
    document.querySelector(`.message`).textContent = message;

 
}

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = (document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  if (guess.trim().length === 0) {
    document.querySelector(`.message`).textContent = `no number❗❗❗`;
  }
  else if (Number(guess)===correctNumber){
    document.querySelector(`.message`).textContent = `Correct number ❗❗❗`;
    document.querySelector(`body`).style.backgroundColor=`#f542da`;
    document.querySelector(`.number`).style.width=`30rem`;
    document.querySelector(`.question-mark`).textContent=correctNumber;
    document.querySelector(`.check`).style.display=`none`
    


    if (score > highScore) {
        highScore=score;
        document.querySelector(`.highscore`).textContent=highScore;
    }

  }
else if (guess !== correctNumber){
    if (score > 1){ 
        
        displayMessage( guess>correctNumber? `too high ❗❗❗`
        :`too low ❗❗❗`)
        
        score--,
        document.querySelector(`.score`).textContent=score
    }
    else {
        document.querySelector(`.message`).textContent = `you lost the game ❗❗❗`;
        document.querySelector(`.score`).textContent = 0;


    }
}
//    else if (guess< correctNumber){
//    if (score > 1){ 
//         document.querySelector(`.message`).textContent = `too low ❗❗❗`;
        
//         score--,
//         document.querySelector(`.score`).textContent=score
//     }
//     else {
//         document.querySelector(`.message`).textContent = `you lost the game ❗❗❗`;
//         document.querySelector(`.score`).textContent = 0;
// ;

//     }
// }

});

document.querySelector(`.again`).addEventListener(`click`,

function(){

  score=20;
  correctNumber= Math.trunc(Math.random()*20)+1;

  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.question-mark`).textContent=`?`
  document.querySelector(`.score`).textContent=score
  document.querySelector(`.guess`).value=``

  document.querySelector(`body`).style.backgroundColor=`#222`;
  document.querySelector(`.number`).style.width=`15rem`;
  document.querySelector(`.check`).style.display=`block`

}

)