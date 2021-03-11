<template>
	<div
		ref="introduction"
		class="introduction">
		<div class="intro">
			<span class="name">{{ props_introduction.name }}</span>
			<span class="jobs">{{ jobs.join(' | ') }}</span>
			<a
				class="big portfolio"
				@click.stop="open($event, 'portfolio')">
				<i />
				Portfolio
			</a>
			<a
				class="big resume"
				@click.stop="open($event, 'resume')">
				<i />
				Resume/CV</a>
			<div class="links">
				<div />
				<a href="#">
					<span>Github</span>
				</a>
				<div />
				<a :href="props_introduction.android_url">
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
	emits: ['click'],
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
		}
	}
};
</script>
<style src="../assets/less/introduction.less"></style>
