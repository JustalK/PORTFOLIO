<template>
	<div
		id="SOCIALS">
		<a
			:class="{invisible: invisible}"
			:href="props_introduction.android_url"><font-awesome-icon :icon="['fab', 'google-play']" /></a>
	</div>
</template>
<script>

export default {
	props: {
		invisible: {
			type: Boolean,
			required: true
		},
		props_introduction: {
			type: Object,
			required: true
		}
	}
};
</script>
<style src="../assets/less/socials.less"></style>
