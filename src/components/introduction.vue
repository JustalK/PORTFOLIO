<template>
	<div
		ref="introduction"
		class="introduction">
		<div class="intro">
			<h1 class="name">
				{{ props_introduction.name }}
			</h1>
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
			jobs: []
		};
	},
	async mounted() {
		const jobs = await this.get_my_jobs();
		const jobs_title = jobs.map(job => job.title);
		this.update_jobs(jobs_title);
	},
	methods: {
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
