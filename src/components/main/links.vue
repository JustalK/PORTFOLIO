<template>
	<div
		id="LINKS"
		:class="{invisible: invisible, is_animated: is_animated}">
		<a :href="href">
			<span>G</span>
			<span>I</span>
			<span>T</span>
			<span>H</span>
			<span>U</span>
			<span>B</span>
		</a>
		<a href="mailto:justal.kevin@gmail.com">
			<span>E</span>
			<span>M</span>
			<span>A</span>
			<span>I</span>
			<span>L</span>
		</a>
	</div>
</template>
<script>
export default {
	props: {
		invisible: {
			type: Boolean,
			required: true
		},
		is_animated: {
			type: Boolean
		}
	},
	data: () => {
		return {
			text: 'Fork me on GitHub !',
			href: 'https://github.com/JustalK'
		};
	}
};
</script>
<style src="../../assets/less/links.less"></style>
