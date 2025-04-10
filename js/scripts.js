//Game
const gameOptionsElement = document.getElementById("game-icon");

//Results
const userResultgameElement = document.getElementById("games-result");


const gameOptions = ["paper","scissor", "rock"];
const gameOptionsAdvanced = ["paper","scissor","rock","spok","lagarto"]

let userChoose = "";
let pcChoose = "";

// Detectar dónde hacemos click
// Guardar nuestra jugada
const saveUserOption = event => {
  userChoose = event.target.dataset.icon;
};

//Generar una jugada aleatoria para el ordenador y guardarla 
//Simple
const randomPcPlay = () => {
  gameOptions.playerSelect = true;
  const randomPlay = Math.floor(Math.random() * gameOptions.length)
  const pcPlay = gameOptions[randomPlay];
  pcChoose = pcPlay;
  console.log(`${userChoose} --- ${pcChoose}`)
}

//Comparar jugadas
gameOptionsElement.addEventListener("click", saveUserOption);
gameOptionsElement.addEventListener("click",randomPcPlay)
