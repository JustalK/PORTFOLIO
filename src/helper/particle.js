export class Particle {
	constructor(x, y, ctx) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.size = 3;
		this.base_x = this.x;
		this.base_y = this.y;
		this.density = (Math.random() * 30) + 1;
	}
	draw() {
		this.ctx.fillStyle = 'white';
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		this.ctx.closePath();
		this.ctx.fill();
	}
}
