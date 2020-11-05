<template>
	<span
		:class="{invisible: invisible}"
		class="text">
		{{ text }}
	</span>
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
		}
	}
};
</script>
<style src="../../assets/less/text.less"></style>
