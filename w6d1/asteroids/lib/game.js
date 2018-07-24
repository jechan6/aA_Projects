const MovingObject = require("./moving_object.js");
const Utils = require("./utils.js");
const Asteroid = require("./asteroid.js");
const GameView = require("./game_view.js");

function Game (){
  this.DIM_X = Game.DIM_X;
  this.DIM_Y = Game.DIM_Y;
  this.NUM_ASTEROIDS = Game.NUM_ASTEROIDS;
  this.asteroids = [];
  this.addAsteroids();
}
Game.NUM_ASTEROIDS = 10;
Game.DIM_X = 800;
Game.DIM_Y = 800;

Game.prototype.addAsteroids = function(){
  while(this.asteroids.length < Game.NUM_ASTEROIDS){
    let x = this.randomPosition();
    let y = this.randomPosition();
    this.asteroids.push(new Asteroid({pos: [x,y]}));
  }
};

Game.prototype.randomPosition = function(){
  return Math.floor(Math.random() * Math.floor(Game.DIM_X));
};

Game.prototype.draw = function(ctx){
  // let canvas = document.getElementById('game-canvas').getContext('2d');
  ctx.clearRect(0,0,800,800);
  this.asteroids.forEach((el) => {
    el.draw(ctx);
  });
};

Game.prototype.moveObjects = function(){
  this.asteroids.forEach((el) => {
    el.move();
  });
};

Game.prototype.checkCollisions = function() {
  for(let i = 0; i<this.asteroids.length-1;i++) {
    for(let j = i + 1; j<this.asteroids.length;j++) {
      console.log(this.asteroids[i].isCollidedWith(this.asteroids[j]));
      if(this.asteroids[i].isCollidedWith(this.asteroids[j])) {
        this.remove(j);
        this.remove(i);
      }
    }
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(idx) {
  //this.asteroids.splice(idx,1);
};

module.exports = Game;
