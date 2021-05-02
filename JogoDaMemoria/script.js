const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard= false;

function flipCard(){
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');
  if (!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  hasFlippedCard = false;
  checkForMath();
}

function checkForMath(){
  if (firstCard.dataset.card === secondCard.dataset.card){
    disableCards();
    return;
  }
  unflipCards();
}

function disableCards(){
  firstCard.removeEventListener ('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resertBoard();
}

function unflipCards(){
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    
    resertBoard();
  }, 1500);
}

function resertBoard(){
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//embaralha as cartas, sorteio aleatorio

(function suffle(){
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  })
})();


cards.forEach((card) => {
  card.addEventListener('click', flipCard)
})


