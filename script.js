button = document.querySelector('.btn')
questionDiv = document.querySelector('.question')
animation = document.querySelector('.animation')
scoreDiv = document.querySelector('.score')
animation.classList.add('hidden')
questionDiv.classList.add('faded')
const animation2 = document.querySelector('.animation2')
const wall = document.querySelector('.wall')
const wallAudio = document.querySelector('.greatwall')
const getEmOut = document.querySelector('.getemout')
const winning = document.querySelector('.winning')
function fetchThis() {
    fetch("https://api.tronalddump.io/random/quote", {
            headers: {
                Accept: "application/hal+json"
            }
        })
        .then(res => {
            return res.json()
        })
        .then(res => {
            console.log("success!", res)
            quote.innerText = 'Donald says: ' + res.value;
            console.log(quote)
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
}

class Card {
    constructor(question, answer, bogus, bogus2, bogus3) {
        this.question = question;
        this.answer = answer;
        this.bogus = bogus;
        this.bogus2 = bogus2;
        this.bogus3 = bogus3;
    }
}

let question1 = new Card('When is the Don\'s birthday?',
    'June 14, 1946',
    'May 12, 1950',
    'August 30, 1942 ',
    'January 8, 1969')

let question2 = new Card('Who is Donalds second wife?',
    'Marla Maples',
    'Goldie Hawn',
    'Ivanka Trump',
    'Ivana Trump')

let question3 = new Card('Donald Trump is the ___ president of the US',
    '45th',
    '46th',
    '41st',
    '48th')

let question4 = new Card('What does Trump eat at McDonalds?',
    '2 Big Macs, 2 Filet-o-fish, Lg chocolate milkshake',
    '1 McRib, 2 20pc McNuggets, Lg diet coke',
    '1 McDouble, large fries, fruit and yogurt parfeit',
    '2 Quarter-pounders w/ cheese, crispy chicken sandwich, oreo McFlurry'
)
let question5 = new Card('How many times had Trump been sued?',
    '3500',
    '6000',
    '130',
    '1500')

let question6 = new Card('Trump won a razzie for his perfmance in which film?',
    'Ghosts Can\'t do it',
    'Zoolander',
    'Home Alone 2',
    'Sex & the City'
)

let question7 = new Card('According to Donald himself, who cuts his hair?',
    'Melania Trump',
    'Paul Mitchell',
    'Tiffany Trump',
    'The Mar-a-lago Salon')

let question8 = new Card('What is Donald afraid of?',
    'Germs',
    'Hillary',
    'Spiders',
    'Iran')

let question9 = new Card('How many times has Don tweeted since he became president?',
    'Over 17,000 tweets',
    'Between 10,000 to 13,000 tweets',
    'Between 5000 and 9000 tweets',
    'Under 5000 tweets')

let question10 = new Card('What year did Donald appear on WWE?',
    '2009',
    '2001',
    '1998',
    '2013')

let choices = document.querySelectorAll('.choices')
let ul = document.querySelector('.list')
const quote = document.querySelector('.quote')
ul.classList.add('hidden')
wall.classList.add('hidden')

class Board {
    constructor() {
        this.allCards = []
        this.answers = []
    }
    makeCardsArray() {
        this.allCards.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10)
    }
    getAnswers() {
        for (let i = 0; i < this.allCards.length; i++) {
            this.answers.push([this.allCards[i].answer, this.allCards[i].bogus, this.allCards[i].bogus2, this.allCards[i].bogus3])
        }
    }
    shuffle() { //shuffles the 2D array, got this algorithm from stack overflow
        for (var k = 0; k < this.answers.length; k++) {
            var i = this.answers[k].length;
            if (i == 0)
                return false;
            else {
                while (--i) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tempi = this.answers[k][i];
                    var tempj = this.answers[k][j];
                    this.answers[k][i] = tempj;
                    this.answers[k][j] = tempi;
                }

            }
        }
        return this.answers
    }
}
let score = 0
class Game {
    constructor() {}
    startGame() {
        button.addEventListener('click', function (evt) {
            evt.preventDefault();
            ul.classList.remove('hidden')
            animation2.classList.add('hidden')
            questionDiv.innerText = board.allCards[0].question
            for (let i = 0; i < choices.length; i++) {
                choices[i].innerText = board.answers[0][i]
            }
        })
    }
    playRound() {
        questionDiv.innerText = board.allCards[0].question
        for (let i = 0; i < choices.length; i++) {
            choices[i].innerText = board.answers[0][i]
        }
    }
    checkForMatch() {
        for (let i = 0; i < choices.length; i++) {
            choices[i].addEventListener('click', function (evt) {
                evt.preventDefault();

                switch (choices[i].innerText) {
                    case 'June 14, 1946':
                        winning.play();
                        animation.classList.add('hidden')
                        board.answers.shift();
                        board.allCards.shift();
                        score++;
                        scoreDiv.innerText = score;
                        fetchThis();
                        game.playRound();
                        break;
                    case 'Marla Maples':
                        winning.play();
                        animation.classList.add('hidden')
                        board.answers.shift();
                        board.allCards.shift();
                        score++;
                        scoreDiv.innerText = score;
                        fetchThis();
                        game.playRound();
                        break;
                    case '45th':
                        winning.play();
                        animation.classList.add('hidden')
                        board.answers.shift();
                        board.allCards.shift();
                        score++;
                        scoreDiv.innerText = score;
                        fetchThis();
                        game.playRound();
                        break;
                    case '2 Big Macs, 2 Filet-o-fish, Lg chocolate milkshake':
                            winning.play();
                        animation.classList.add('hidden')
                        board.answers.shift();
                        board.allCards.shift();
                        score++;
                        scoreDiv.innerText = score;
                        fetchThis();
                        game.playRound();
                        break;
                    case '3500':
                            winning.play();
                        animation.classList.add('hidden')
                        board.answers.shift();
                        board.allCards.shift();
                        score++;
                        scoreDiv.innerText = score;
                        fetchThis();
                        game.playRound();
                        break;
                    case 'Ghosts Can\'t do it':
                            winning.play();
                        animation.classList.add('hidden')
                        board.answers.shift();
                        board.allCards.shift();
                        score++;
                        scoreDiv.innerText = score;
                        fetchThis();
                        game.playRound();
                        break;
                    case 'Melania Trump':
                            winning.play();
                        animation.classList.add('hidden')
                        board.answers.shift();
                        board.allCards.shift();
                        score++;
                        scoreDiv.innerText = score;
                        fetchThis();
                        game.playRound();
                        break;
                    case 'Germs':
                            winning.play();
                        animation.classList.add('hidden')
                        board.answers.shift();
                        board.allCards.shift();
                        score++;
                        scoreDiv.innerText = score;
                        fetchThis();
                        game.playRound();
                        break;
                    case 'Over 17,000 tweets':
                            winning.play();
                        animation.classList.add('hidden')
                        board.answers.shift();
                        board.allCards.shift();
                        score++;
                        scoreDiv.innerText = score;
                        fetchThis();
                        game.playRound();
                        break;
                    case '2009':
                        animation.classList.add('hidden');
                        score++;
                        scoreDiv.innerText = score;
                        wallAudio.play();
                        ul.classList.add('hidden');
                        questionDiv.classList.add('hidden');
                        wall.classList.remove('hidden')
                        break;
                    default:
                        quote.innerText = 'Donald says: YOUR\'E FIRED!'
                        animation.classList.remove('hidden')
                        getEmOut.play();
                        score--;
                        scoreDiv.innerText = score;
                }

            })
        }
    }
}

let board = new Board();
board.makeCardsArray();
board.getAnswers();
board.shuffle();
let game = new Game();
game.startGame();
game.checkForMatch();