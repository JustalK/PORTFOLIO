<template>
	<a
		id="GITHUB"
		:class="{invisible: invisible}"
		:href="href"
		target="_blank">
		<span>{{ text }}</span>
	</a>
</template>
<script>
export default {
	props: {
		invisible: {
			type: Boolean,
			required: true
		}
	},
	data: () => {
		return {
			text: 'Fork me on GitHub !',
			href: 'https://github.com/JustalK/PORTFOLIO'
		};
	}
};
</script>
<style src="../../assets/less/github.less"></style>
