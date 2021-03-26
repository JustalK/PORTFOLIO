export class Particle {
	constructor(x, y, ctx) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.size = 3;
		this.base_x = this.x;
		this.base_y = this.y;
		this.density = (Math.random() * 40) + 5;
	}
	draw() {
		this.ctx.fillStyle = 'white';
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		this.ctx.closePath();
		this.ctx.fill();
	}
	update(mouse_x, mouse_y) {
		const dx = mouse_x - this.x;
		const dy = mouse_y - this.y;
		const distance = Math.sqrt(dx * dx + dy * dy);
		const force_direction_x = dx / distance;
		const force_direction_y = dy / distance;
		const max_distance = 300;
		const force = (max_distance - distance) / max_distance;
		const direction_x = force_direction_x * force * this.density;
		const direction_y = force_direction_y * force * this.density;
		if (distance < max_distance) {
			this.x -= direction_x;
			this.y -= direction_y;
		} else {
			if (this.x !== this.base_x) {
				const dx_move = this.x -this.base_x;
				this.x -= dx_move / 10;
			}
			if (this.y !== this.base_y) {
				const dy_move = this.y -this.base_y;
				this.y -= dy_move / 10;
			}
		}
	}
}
