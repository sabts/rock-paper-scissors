//Game
const gameOptionsElement = document.getElementById("game-icon");

//Results
const userResultgameElement = document.getElementById("games-result");

let userOption = "";
let pcOption = "";

// Detectar dónde hacemos click
// Guardar nuestra jugada
const saveUserOption = event => {
  userOption = event.target.dataset.icon;
};

//Generar una jugada aleatoria para el ordenador y guardarla
const userSelectOption = () => {
  //NO BUCLES
  if (saveUserOption === true) {
    pcOption = Math.floor(Math.random() * gameOptionsElement.dataset.icon);
  }
};

gameOptionsElement.addEventListener("click", saveUserOption);
