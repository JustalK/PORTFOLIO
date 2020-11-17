<template>
	<div>
		<span class="intro">
			<span>Hello world, I'm <a
				class="capitalize"
				:href="&quot;mailto:&quot; + props_introduction.email">{{ props_introduction.name }}</a>.</span>
			<span>I'm a <em>{{ job }}</em></span>
			<span>If any questions, contact me at <a :href="&quot;mailto:&quot; + props_introduction.email">{{ props_introduction.email }}</a></span>
		</span>
	</div>
</template>
<script>
export default {
	props: {
		props_introduction: {
			type: Object,
			required: true
		}
	},
	data: () => {
		return {
			jobs: ['Full stack developer', 'Web Developer', 'Frontend Developer', 'Backend Developer', 'System Administrator'],
			job_index: 0,
			job: ''
		};
	},
	watch: {
		props_introduction() {
			this.writing();
		},
	},
	methods: {
		writing() {
			const i = this.job.length;
			if (i < this.jobs[this.job_index].length) {
				this.job += this.jobs[this.job_index].charAt(i);
				setTimeout(this.writing, 50);
			} else {
				this.job += '.';
				setTimeout(this.switch_job, 2000);
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
