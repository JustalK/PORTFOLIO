<template>
	<div class="introduction">
		<span class="intro">
			<img :src="props_introduction.image">
			<span>Hello world, I'm <a
				class="capitalize"
				:href="&quot;mailto:&quot; + props_introduction.email">{{ props_introduction.name }}</a>.</span>
			<span>I'm a <em>{{ job }}</em></span>
			<span>If any questions, contact me at <a :href="&quot;mailto:&quot; + props_introduction.email">{{ props_introduction.email }}</a></span>
		</span>
	</div>
</template>
<script>
import api from '../../services/api';

export default {
	props: {
		props_introduction: {
			type: Object,
			required: true
		}
	},
	data: () => {
		return {
			jobs: [],
			job_index: 0,
			job: ''
		};
	},
	watch: {
		props_introduction() {
			this.writing();
		},
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
		writing() {
			if (this.job !== undefined) {
				const i = this.job.length;
				if (i < this.jobs[this.job_index].length) {
					this.job += this.jobs[this.job_index].charAt(i);
					setTimeout(this.writing, 50);
				} else {
					this.job += '.';
					setTimeout(this.switch_job, 2000);
				}
			} else {
				setTimeout('', 50);
			}
		},
		switch_job() {
			this.job_index = (this.job_index + 1) % this.jobs.length;
			this.job = '';
			this.writing();
		}
	}
};
</script>
<style src="../../assets/less/introduction.less"></style>
