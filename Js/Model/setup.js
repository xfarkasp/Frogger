//premenne na pracu s canvas elementom
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 750;
ctx.fillStyle='green';
//nastavenie 1 levlu a jeho IMG
const mapa1= new Image();
mapa1.src = 'Assets/Mapy/lvl1.png';
let level=0;
//velkost jedneho skoku
const grid = 57;
//pole klaves
let keys =[];
//rychlost hry
let gameSpeed = 1;
//framecounter
let fps=0;
//leader board pole, naplnenie z cookies a sort
var leaderArr = [];
let cookieSize= 0;
if(localStorage.getItem('socreSize')!=null){
    cookieSize=localStorage.getItem('socreSize')
    for(let i=0; i<cookieSize; i++)
        leaderArr.push([localStorage.getItem('player'+i), localStorage.getItem('score'+i)]);
}
leaderArr.sort(function(a,b) {
    return b[1]-a[1];
});
//polia nepriatelov
let carsArray=[];
let drevaArray=[];
//img dreva
const drevoImg= new Image();
drevoImg.src = 'Assets/Objects/Voda/drevo.png';
//img korytnacka
const korytnackaImg= new Image();
korytnackaImg.src = 'Assets/Objects/Voda/turtles.png';
//zaciatok vodnej plochy po y osi
let vodaZaciatok=200;
//hodnota ci je voda bezpecna(ci sa hrac nachadza na bezpecnom objekte)
let bayWatch= true;
//spritesheet forgera
const hrac= new Image();
hrac.src = 'Assets/Objects/Frogger/spritesheet2.png';
//posuvanie sa po spritesheete o nasledujuce obrazky
let xOd=0;
let xDo=150;
//smer tvare hraca
let smerTvare=0;
//fotky aut
const auta= new Image();
auta.src = 'Assets/Objects/auta.png';
//gameover screen
const gameOver= new Image();
gameOver.src = 'Assets/Okna/gameOver.png';
//premenna ktora ak je 1, hra skonci
let gameOverValue=0;
//victory screen
const youWon= new Image();
youWon.src = 'Assets/Okna/victory.png';
let youWonValue=0;
//povolenie a zakazanie menu buttonov
let menuckoButtons=true;
//zvuky v hre
var music=document.getElementById("hudba");
var zvukSkok=new Audio("Assets/Sound/Zvuky/sound-frogger-hop.wav");
var zvukZrazka=new Audio("Assets/Sound/Zvuky/sound-frogger-squash.wav");
var zvukPotopenie=new Audio("Assets/Sound/Zvuky/sound-frogger-plunk.wav");
var zvukGameOver=new Audio("Assets/Sound/Zvuky/mixkit-arcade-fast-game-over-233.wav");
var zvukGameWon=new Audio("Assets/Sound/Zvuky/mixkit-medieval-show-fanfare-announcement-226.wav");
//timer
let myTimeout=0;
//premenna na uchovanie mena z inputelementu
var lbName = '';
//premenna pre uchovanie vstupneho elementu
var nameInput = document.getElementById("nameinput");
nameInput.style.display = "none";

let replayValue=false;
let pauseValue=false;
let score=0;
//pole srdiecok
const srdiecko= new Image();
srdiecko.src = 'Assets/Objects/Frogger/srdiecko.png';
var srdieckaX = [5, 30, 55];
var srdieckaY = [25, 25, 25];
var srdieckaWidth = [25, 25, 25];
var srdieckaHeight = [25, 25, 25];