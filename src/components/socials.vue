<template>
	<div
		id="SOCIALS"
		:class="{invisible: invisible}">
		<a :href="url"><font-awesome-icon :icon="['fab', 'google-play']" /></a>
	</div>
</template>
<script>

export default {
	props: {
		invisible: {
			type: Boolean,
			required: true
		},
		url: {
			type: String,
			required: true
		}
	}
};
</script>
<style src="../assets/less/socials.less"></style>
