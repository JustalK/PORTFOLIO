<template>
	<div
		id="LOADING"
		:class="{ invisible: invisible, isLoaded: isLoaded }"
		:style="{
			width: loadPercent + '%',
			transition: `width ${timeTransition}s cubic-bezier(0.8, 0, 0.25, 1)`
		}" />
</template>
<script>
export default {
	props: {
		invisible: {
			type: Boolean,
			required: true
		},
		load: {
			type: Number,
			required: true
		}
	},
	data: () => {
		return {
			timeout_reset_load: null,
			isLoaded: false,
			loadPercent: 0,
			timeTransition: 1
		};
	},
	watch: {
		load(value) {
			clearTimeout(this.timeout_reset_load);
			this.loadPercent = value;
			this.isLoaded = false;
			if (value === 0) {
				this.timeTransition = 0;
			} else {
				this.timeTransition = 1;
			}
			this.timeout_reset_load = setTimeout(() => {
				this.isLoaded = true;
			}, 1050);
		}
	}
};
</script>
<style src="../../assets/less/loading.less"></style>
