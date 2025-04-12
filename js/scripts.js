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
  paper: { rock: true, scissor: false },
  rock: { scissor: true, paper: false },
  scissor: { paper: true, rock: false },
};

const imageSrc = {
  paper: "/assets/icon-paper.svg",
  rock: "/assets/icon-rock.svg",
  scissor: "/assets/icon-scissors.svg",
};

const gameOptions = ["paper", "scissor", "rock"];
const gameOptionsAdvanced = ["paper", "scissor", "rock", "spok", "lagarto"];

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

//Generar una jugada aleatoria para el ordenador y guardarla:
//Simple
const randomPcPlay = () => {
  const randomPlay = Math.floor(Math.random() * gameOptions.length);
  pcChoose = gameOptions[randomPlay];
  pickedPcImageElement.src = imageSrc[pcChoose]; 
};

//Comparar jugadas, Mostrar resultado, Asignar puntos
const userVsPcChoose = () => {
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

const playAgain = () => {
  gameOptionsElement.classList.remove("hide");
  selectedElement.classList.add("hide");
  userChoose = '';
  pcChoose = '';
};

gameOptionsElement.addEventListener("click", saveUserOption);
gameOptionsElement.addEventListener("click", randomPcPlay);
gameOptionsElement.addEventListener("click", userVsPcChoose);
playAgainButtonElement.addEventListener("click", playAgain);
