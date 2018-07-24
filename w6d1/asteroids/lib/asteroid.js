const MovingObject = require("./moving_object.js");
const Utils = require("./utils.js");


function Asteroid(pos) {
  MovingObject.call(this,pos);
  this.color = Asteroid.COLOR;
  this.radius = Asteroid.RADIUS;
  this.vel = Utils.randomVec(10);
}
Utils.inherits(Asteroid, MovingObject);
Asteroid.COLOR = "#00FF00";
Asteroid.RADIUS = 25;


module.exports = Asteroid;
// const mo = new Asteroid({pos: [100,100]});
// let canvas = document.getElementById('game-canvas').getContext('2d');
// mo.draw(canvas);
