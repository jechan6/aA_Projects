const MovingObject = require("./moving_object.js");
const Utils = require("./utils.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

window.MovingObject = MovingObject;
window.Utils = Utils;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;

document.addEventListener("DOMContentLoaded", function(event) {
  let canvas = document.getElementById('game-canvas').getContext('2d');
  const game = new Game();
  const gameView = new GameView(game,canvas);
  gameView.start();
});
