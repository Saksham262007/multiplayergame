var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
 carImage = loadImage ("car1.png");
 carImage2 = loadImage("car2.png");
  carImage3 = loadImage("car3.png");
  carImage4 = loadImage("car4.png");
groundImage = loadImage("ground.png");
trackImage = loadImage("track.jpg");
trackImage2 = loadImage("track.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
