window.onload = newGame;
document.getElementById('new-game').addEventListener('click', newGame);

let totalMatched = 0;
let tempVal = '';
let allCards = document.querySelectorAll('.card-cell');
let totalMoves = 0;

function newGame() {
  let cards = [
    'A',
    'A',
    'B',
    'B',
    'C',
    'C',
    'D',
    'D',
    'E',
    'E',
    'F',
    'F',
    'G',
    'G',
    'H',
    'H'
  ];
  let shuffledCards = shuffle(cards);
  let gridDivs = document.getElementById('board').children;
  for (let i = 0; i < gridDivs.length; i++) {
    gridDivs[i].innerHTML = shuffledCards[i];
  }
  addCardListeners();
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function flipCard() {
  this.classList.toggle('flip');
}

function addCardListeners() {
  allCards.forEach(element => {
    element.addEventListener('click', flipCard);
    element.addEventListener('click', testMatch);
  });
}

let timer = document.getElementById('timer');

// function runTimer() {
//   let seconds = 0;
//   let minutes = 0;
//   let hours = 0;
//   setInterval(function() {
//     seconds++;
//     if (seconds === 60) {
//       seconds = 0;
//       minutes++;
//     }
//     if (minutes === 60) {
//       minutes = 0;
//       hours++;
//     }
//     timer.innerHTML = hours + ' hrs ' + minutes + ' mins ' + seconds + ' secs';
//   }, 1000);
// }

// function sleep(milliseconds) {
//   let start = new Date().getTime();
//   for (let i = 0; i < 1e7; i++) {
//     if (new Date().getTime() - start > milliseconds) {
//       break;
//     }
//   }
// }

function testMatch() {
  if (tempVal.length === 0) {
    tempVal = this.innerHTML;
    this.classList.add('disabled');
  } else if (this.innerHTML !== tempVal) {
    document.querySelectorAll('.disabled').forEach(element => {
      element.classList.remove('disabled');
    });
    setTimeout(function() {
      document.querySelectorAll('.flip').forEach(element => {
        element.classList.remove('flip');
      });
    }, 2000);
    tempVal = '';
    totalMoves++;
  } else {
    tempVal = '';
    this.classList.add('matched');
    document.querySelectorAll('.disabled').forEach(element => {
      element.classList.add('matched');
    });
    totalMatched += 2;
    totalMoves++;
  }
  document.getElementById('moves').innerHTML = totalMoves;
  // if (totalMoves === 1) {
  //   runTimer();
  // }
  if (totalMatched === 16) {
    //end game
  }
}
