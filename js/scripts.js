//Game
const gameOptionsElement = document.getElementById("game-icon");
const userImage = document.getElementById("picked-user-image");
const pcImage = document.getElementById("picked-pc-image");

//Results
const selectedElement = document.getElementById("games-result");
const resultgameElement = document.getElementById("game-result");
const userPointsElements = document.getElementById("points-user");
const pcPointsElements = document.getElementById("points-pc");
const playAgainButtonElement = document.getElementById("play-again");

const rules = {
  paper:  {rock:true,
          scissor:false},

  rock:   {scissor:true,
          paper:false},

  scissor:{paper : true,
           rock : false}
}
const gameOptions = ["paper","scissor", "rock"];
const gameOptionsAdvanced = ["paper","scissor","rock","spok","lagarto"]

let userChoose = "";
let pcChoose = "";
let userPoints = 0;
let pcPoints = 0;

// Detectar dónde hacemos click
// Guardar nuestra jugada
const saveUserOption = event => {
  userChoose = event.target.dataset.icon;
};

//Generar una jugada aleatoria para el ordenador y guardarla:
//Simple
const randomPcPlay = () => {
  gameOptions.playerSelect = true;

  const randomPlay = Math.floor(Math.random() * gameOptions.length)
  const pcPlay = gameOptions[randomPlay];

  pcChoose = pcPlay;
  //console.log(`user:${userChoose}  pc:${pcChoose}`)
}

//no funciona /IGNORAR
const changeImages = () => { 
  userImage.src = getImageSrc(userChoose);
  pcImage.src = getImageSrc(pcChoose);

  userImage.classList.remove("selected");
  pcImage.classList.remove("selected");

  document.querySelector('game-item__image').classList.add(`${userChoose}`);
  document.querySelector('game-item__image').classList.add(`${pcChoose}`);
} 

//Comparar jugadas, Mostrar resultado, Asignar puntos

const userVsPcChoose = () => {

  if (userChoose === pcChoose){
    //console.log('empate') 
    selectedElement.classList.remove("hide");
    gameOptionsElement.classList.add('hide')
    resultgameElement.textContent = 'TIE';
    }
    else if(rules[userChoose]){
   // console.log('ganaste') 
    selectedElement.classList.remove("hide");
    gameOptionsElement.classList.add('hide')
    resultgameElement.textContent = 'YOU WIN';
    userPoints++
    userPointsElements.textContent = userPoints
  }
  else {
  //console.log('perdiste')
  selectedElement.classList.remove("hide")
  resultgameElement.textContent = 'YOU LOSE'
  gameOptionsElement.classList.add('hide')
  pcPoints++
  pcPointsElements.textContent = pcPoints
  }
  changeImages()
}

const playAgain = () => {
  if(playAgainButtonElement === true);{
  gameOptionsElement.classList.remove('hide')
  selectedElement.classList.add("hide");}
}

gameOptionsElement.addEventListener("click", saveUserOption);
gameOptionsElement.addEventListener("click",randomPcPlay)
gameOptionsElement.addEventListener("click",userVsPcChoose)
playAgainButtonElement.addEventListener("click",playAgain )
