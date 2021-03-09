<template>
	<span
		:class="{invisible: invisible, unmounted: unmounted}"
		class="text"
		v-html="text" />
</template>
<script>
export default {
	props: {
		text: {
			type: String,
			required: true
		},
		invisible: {
			type: Boolean,
			required: true
		},
		unmounted: {
			type: Boolean,
			required: true
		}
	}
};
</script>
<style src="../../assets/less/text.less"></style>
