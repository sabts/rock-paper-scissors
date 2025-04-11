//Game
const gameOptionsElement = document.getElementById("game-icon");

//Results
const selectedElement = document.getElementById("games-result");
const resultgameElement = document.getElementById("game-result");
const pickedImageElement = document.getElementById("picked-user-image");
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

// Detectar dónde hacemos click
// Guardar nuestra jugada
const saveUserOption = event => {
  userChoose = event.target.dataset.icon;
  pickedImageElement = imageSrc[event.target.dataset.icon];
};

//Generar una jugada aleatoria para el ordenador y guardarla:
//Simple
const randomPcPlay = () => {
  gameOptions.playerSelect = true;

  const randomPlay = Math.floor(Math.random() * gameOptions.length);
  const pcPlay = gameOptions[randomPlay];

  pcChoose = pcPlay;
  //console.log(`user:${userChoose}  pc:${pcChoose}`)
};

//Comparar jugadas, Mostrar resultado, Asignar puntos

const userVsPcChoose = () => {
  if (userChoose === pcChoose) {
    //console.log('empate')
    selectedElement.classList.remove("hide");
    gameOptionsElement.classList.add("hide");
    pickedImageElement.classList.remove("item__image");
    pickedImageElement.classList.add("image-item");
    //replace(`${item__image} ,game-${item.target.dataset}` analizar el game-{item}
    resultgameElement.textContent = "TIE";
  } else if (rules[userChoose]) {
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
  if (playAgainButtonElement === true);
  {
    gameOptionsElement.classList.remove("hide");
    selectedElement.classList.add("hide");
  }
};

gameOptionsElement.addEventListener("click", saveUserOption);
gameOptionsElement.addEventListener("click", randomPcPlay);
gameOptionsElement.addEventListener("click", userVsPcChoose);
playAgainButtonElement.addEventListener("click", playAgain);
