function MovingObject (options){

  this.pos = options.pos;
  console.log(this.pos);
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();

  ctx.arc(this.pos[0],this.pos[1], this.radius, 0, 2*Math.PI, true);
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];

  if (this.pos[0] <= 0){
    this.pos[0] = 800;
  } else if (this.pos[0] >= 800){
    this.pos[0] = 0;
  }
  if (this.pos[1] <= 0){
    this.pos[1] = 800;
  } else if (this.pos[1] >= 800){
    this.pos[1] = 0;
  }
  // this.pos[0]=Math.abs((this.pos[0] + (this.vel[0] * this.radius * 0.1));
  // this.pos[1]=Math.abs((this.pos[1] + (this.vel[1] * this.radius * 0.1)) % 800);
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  let x1 = this.pos[0];
  let x2 = otherObject.pos[0];
  let y1 = this.pos[1];
  let y2 = otherObject.pos[1];
  const distance = Math.sqrt(Math.pow((x1-x2),2) + Math.pow(y1-y2,2));
  return (distance <= (this.radius + otherObject.radius));
};
MovingObject.prototype.collideWith = function(otherObject) {
  
};
//Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)
module.exports = MovingObject;
