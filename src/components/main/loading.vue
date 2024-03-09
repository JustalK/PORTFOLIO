<template>
	<div
		id="LOADING"
		:class="{ invisible: invisible, isLoaded: isLoaded }"
		v-bind:style="{ width: loadPercent + '%' }" />
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
			loadPercent: 0
		};
	},
	watch: {
		load(value) {
			clearTimeout(this.timeout_reset_load);
			this.isLoaded = false;
			this.loadPercent = value;
			this.timeout_reset_load = setTimeout(() => {
				this.isLoaded = true;
				setTimeout(() => {
					this.loadPercent = 0;
				}, 1);
			}, 550);
		}
	}
};
</script>
<style src="../../assets/less/loading.less"></style>
