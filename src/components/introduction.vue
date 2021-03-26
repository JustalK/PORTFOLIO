<template>
	<div
		ref="introduction"
		class="introduction">
		<div class="intro">
			<h1 class="name">
				{{ props_introduction.name }}
			</h1>
			<canvas ref="name" />
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
					<span>Github</span>
				</a>
				<div />
				<a
					:href="props_introduction.android_url"
					target="_blank"
					@mouseenter="hover_small">
					<span>Apps</span>
				</a>
			</div>
		</div>
	</div>
</template>
<script>
import api from '../services/api';
import utils from '../helper/utils.js';

export default {
	props: {
		props_introduction: {
			type: Object,
			required: true
		}
	},
	emits: ['click', 'hover_big', 'hover_small'],
	data: () => {
		return {
			jobs: [],
			particles: [],
			ww: null,
			wh: null,
			ctx: null,
			amount: 0
		};
	},
	async mounted() {
		const jobs = await this.get_my_jobs();
		const jobs_title = jobs.map(job => job.title);
		this.update_jobs(jobs_title);

		setTimeout(() => {

			this.init();
		}, 2000);
	},
	methods: {
		init() {
			this.ww = window.innerWidth;
			this.wh = window.innerHeight;
			this.ctx = this.$refs.name.getContext('2d');
			this.$refs.name.width = 1200;
			this.$refs.name.height = 400;

			this.ctx.fillStyle = '#61C3FF';
			this.ctx.font = '95px Lato-Light';
			this.ctx.textAlign = 'center';
			this.ctx.textBaseline = 'middle';
			this.ctx.shadowColor='#bddcff';
			this.ctx.shadowBlur=10;
			this.ctx.lineWidth=10;
			this.ctx.shadowBlur=10;
			this.ctx.fillText('J U S T A L   K E V I N', this.$refs.name.width/2, this.$refs.name.height/2);
			const data = this.ctx.getImageData(0, 0, this.$refs.name.width, this.$refs.name.height);
			console.log(data);

			class Particle {
				constructor(x, y) {
					this.x = x;
					this.y = y;
				}
			}

			console.log(new Particle(10, 10));
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
		}
	}
};
</script>
<style src="../assets/less/introduction.less"></style>
