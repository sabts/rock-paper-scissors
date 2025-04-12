//Game
const gameOptionsElement = document.getElementById("game-icon");

//Results
const selectedElement = document.getElementById("games-result");
const resultgameElement = document.getElementById("game-result");
const pickedImageElement = document.getElementById("picked-user-image");
const pickedPcImageElement = document.getElementById("picked-pc-image");
const userPointsElements = document.getElementById("points-user");
const pcPointsElements = document.getElementById("points-pc");
const playAgainButtonElement = document.getElementById("play-again");

const rules = {
  paper: { rock: true, scissor: false, spock:true, lizard:false},
  rock: { scissor: true, paper: false, lizard:true, spock:false},
  scissor: { paper: true, rock: false, lizard:true, spock: false},
  spock: { scissor: true, rock: true, lizard:false, paper: false},
  lizard: { scissor: false, rock: false, spock:true, paper: true},
};

const imageSrc = {
  paper: "/assets/icon-paper.svg",
  rock: "/assets/icon-rock.svg",
  scissor: "/assets/icon-scissors.svg",
  spock: "/assets/icon-spock.svg",
  lizard: "/assets/icon-lizard.svg"
};

const gameOptions = ["paper", "scissor", "rock", "spock", "lizard"];

let userChoose = "";
let pcChoose = "";
let userPoints = 0;
let pcPoints = 0;

const saveUserOption = event => {
  if (event.target.classList.contains('game-item')) {
    userChoose = event.target.dataset.icon;
    pickedImageElement.src = imageSrc[userChoose];  
    randomPcPlay();  
    userVsPcChoose(); 
  }
};

const userVsPcChoose = () => {
 // let bordeChange = document.querySelectorAll(".game-item");
 // const userborder= bordeChange.classList.add(userChoose);
//const pcborder = document.querySelector(pcChoose);
  
  if (userChoose === pcChoose) {
    //console.log('empate')
    selectedElement.classList.remove("hide");
    gameOptionsElement.classList.add("hide");
    pickedImageElement.classList.remove("item__image");
    pickedImageElement.classList.add("image-item");
    resultgameElement.textContent = "TIE";
  } else if (rules[userChoose][pcChoose]) {
    // console.log('ganaste')
    selectedElement.classList.remove("hide");
    gameOptionsElement.classList.add("hide");
    gameOptionsElement.classList.remove("item__image");
    gameOptionsElement.classList.add(userChoose);
    gameOptionsElement.classList.add(pcChoose);
    resultgameElement.textContent = "YOU WIN";
    userPoints++;
    userPointsElements.textContent = userPoints;
  } else {
    //console.log('perdiste')
    selectedElement.classList.remove("hide");
    resultgameElement.textContent = "YOU LOSE";
    gameOptionsElement.classList.add("hide");
    gameOptionsElement.classList.remove("item__image");
    gameOptionsElement.classList.add(userChoose);
    gameOptionsElement.classList.add(pcChoose);
    pcPoints++;
    pcPointsElements.textContent = pcPoints;
  }
};

const randomPcPlay = () => {
  const randomPlay = Math.floor(Math.random() * gameOptions.length);
  pcChoose = gameOptions[randomPlay];
  pickedPcImageElement.src = imageSrc[pcChoose]; 
};

const playAgain = () => {
  gameOptionsElement.classList.remove("paper", "scissor", "rock", "spock", "lizard");
  gameOptionsElement.classList.remove("hide");
  selectedElement.classList.add("hide");
  gameOptionsElement.classList.remove("item__image");
};

gameOptionsElement.addEventListener("click", saveUserOption);
playAgainButtonElement.addEventListener("click", playAgain);
