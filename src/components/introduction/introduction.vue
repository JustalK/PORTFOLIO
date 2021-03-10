<template>
	<div class="introduction">
		<span class="intro">
			<span class="name">{{ props_introduction.name }}</span>
			<span class="jobs">{{ jobs.join(' | ') }}</span>
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
	emits: ['hovering'],
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
		},
		enter_hovering() {
			this.$emit('hovering', true);
		},
		leave_hovering() {
			this.$emit('hovering', false);
		}
	}
};
</script>
<style src="../../assets/less/introduction.less"></style>
