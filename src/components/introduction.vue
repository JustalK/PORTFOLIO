<template>
	<div
		ref="introduction"
		class="introduction">
		<canvas
			ref="name"
			@mousemove="mouse_position" />
		<div class="mobile">
			<h1 class="name">
				{{ props_introduction.name }}
			</h1>
			<ul>
				<li
					class="link"
					@click.stop="open($event, 'portfolio')"
					@mouseenter="hover_big">
					Portfolio
				</li>
				<li
					class="link"
					@click.stop="open($event, 'resume')"
					@mouseenter="hover_big">
					Resume/CV
				</li>
				<li
					class="link">
					<a>
						Github
					</a>
				</li>
				<li
					class="link">
					<i />
					App
				</li>
			</ul>
		</div>
		<div class="intro">
			<span class="jobs">{{ jobs.join(' | ') }}</span>
			<a
				class="big portfolio"
				@click.stop="open($event, 'portfolio')"
				@mouseenter="hover_big">
				<i />
				Portfolio
			</a>
			<a
				class="big resume"
				@click.stop="open($event, 'resume')"
				@mouseenter="hover_big">
				<i />
				Resume/CV</a>
			<div class="links">
				<div />
				<a
					:href="props_introduction.github_url"
					target="_blank"
					@mouseenter="hover_small">
					<img
						:src="require('../assets/imgs/github.png').default"
						alt="Github Justal Kevin">
				</a>
				<div />
				<a
					:href="props_introduction.android_url"
					target="_blank"
					@mouseenter="hover_small">
					<img
						:src="require('../assets/imgs/google.png').default"
						alt="Google App | Justal Kevin">
				</a>
			</div>
		</div>
	</div>
</template>
<script>
import api from '../services/api';
import utils from '../helper/utils.js';
import { Particle } from '../helper/particle.js';


export default {
	props: {
		props_introduction: {
			type: Object,
			required: true
		},
		animation_introduction: {
			type: Boolean,
			required: true
		}
	},
	emits: ['click', 'hover_big', 'hover_small'],
	data: () => {
		return {
			loaded: false,
			jobs: [],
			particles: [],
			ww: null,
			wh: null,
			mouse_x: 0,
			mouse_y: 0,
			ctx: null,
			amount: 0
		};
	},
	watch: {
		animation_introduction() {
			if (!this.loaded) {
				this.init();
				this.loaded = true;
			}
			this.animate();
		}
	},
	async mounted() {
		const jobs = await this.get_my_jobs();
		const jobs_title = jobs.map(job => job.title);
		this.update_jobs(jobs_title);
		window.addEventListener('resize', this.resize);
	},
	methods: {
		init() {
			this.ww = window.innerWidth;
			this.wh = window.innerHeight;
			this.ctx = this.$refs.name.getContext('2d');
			this.$refs.name.width = this.ww;
			this.$refs.name.height = this.wh;

			this.ctx.fillStyle = '#61C3FF';
			this.ctx.font = this.perfect_size(this.ww) + 'px Lato-Light';
			this.ctx.textAlign = 'center';
			this.ctx.textBaseline = 'middle';
			/**
			this.ctx.shadowColor='#bddcff';
			this.ctx.shadowBlur=10;
			this.ctx.lineWidth=10;
			this.ctx.shadowBlur=10;
			**/
			this.ctx.fillText('J U S T A L   K E V I N', this.$refs.name.width/2, this.$refs.name.height/2 - 80);
			const text_coordinates = this.ctx.getImageData(0, 0, this.$refs.name.width, this.$refs.name.height);
			this.init_particle(text_coordinates);
		},
		init_particle(text_coordinates) {
			this.particles = [];
			for (let y = 0, y2 = text_coordinates.height; y < y2; y += 2) {
				for (let x = 0, x2 = text_coordinates.width; x < x2; x += 2) {
					if (text_coordinates.data[(y * 4 * text_coordinates.width) + (x * 4) + 3] > 250) {
						this.particles.push(new Particle(this.ww * (2 * Math.random() - 1), this.wh * (2 * Math.random() - 1), x, y, this.ctx));
					}
				}
			}
		},
		animate() {
			if (this.animation_introduction) {
				this.ctx.clearRect(0, 0, this.$refs.name.width, this.$refs.name.height);
				this.particles.map(particle => {
					particle.draw();
					particle.update(this.mouse_x, this.mouse_y);
				});
				requestAnimationFrame(this.animate);
			}
		},
		mouse_position(event) {
			this.mouse_x = event.x;
			this.mouse_y = event.y;
		},
		async get_my_jobs() {
			return api.get_my_jobs();
		},
		update_jobs(jobs) {
			this.jobs = jobs;
		},
		open(event, page) {
			const element = event.target;
			utils.add_class_to_element(element, 'active');
			this.$emit('click', page, this.$refs.introduction);
		},
		hover_small() {
			this.$emit('hover_small');
		},
		hover_big() {
			this.$emit('hover_big');
		},
		perfect_size(width) {
			if (width > 1200) {
				return 95;
			} else if (width <= 1200 && width > 900) {
				return 80;
			} else if (width > 425) {
				return 60;
			} else {
				return 40;
			}
		},
		resize() {
			console.log('resize');
		}
	}
};
</script>
<style src="../assets/less/introduction.less"></style>
