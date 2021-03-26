function Particle(x,y){
  this.x =  Math.random()*ww;
  this.y =  Math.random()*wh;
  this.dest = {
    x : x,
    y: y
  };
  this.r = 1;
  this.vx = (Math.random()-0.5)*20;
  this.vy = (Math.random()-0.5)*20;
  this.accX = 0;
  this.accY = 0;
  this.friction = Math.random()*0.05 + 0.94;

  this.color = '#999';
}

Particle.prototype.render = function() {
  this.accX = (this.dest.x - this.x)/1000;
  this.accY = (this.dest.y - this.y)/1000;
  this.vx += this.accX;
  this.vy += this.accY;
  this.vx *= this.friction;
  this.vy *= this.friction;

  this.x += this.vx;
  this.y +=  this.vy;

  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
  ctx.fill();

  var a = this.x - mouse.x;
  var b = this.y - mouse.y;

  var distance = Math.sqrt( a*a + b*b );
  if(distance<(radius*70)){
    this.accX = (this.x - mouse.x)/100;
    this.accY = (this.y - mouse.y)/100;
    this.vx += this.accX;
    this.vy += this.accY;
  }
}
