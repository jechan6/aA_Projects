
const MovingObject = require("./moving_object.js");
const Utils = require("./utils.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");

function GameView(game, ctx){
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function(){
  setInterval(()=>{
    this.game.step();
    this.game.draw(this.ctx);

  },20);
};


module.exports = GameView;
