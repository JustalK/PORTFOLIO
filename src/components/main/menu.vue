<template>
	<div
		id="MENU">
		<div :class="{bar:true}">
			<div :class="{legend:true, invisible: invisible}" />
		</div>
		<nav>
			<a href="#">AAAA</a>
			<a href="#">AAAA</a>
			<a href="#">AAAA</a>
		</nav>
	</div>
</template>
<script>
export default {
	props: {
		invisible: {
			type: Boolean,
			required: true
		}
	},
	emits: ['back'],
	methods: {
		back() {
			this.$emit('back');
		}
	}
};
</script>
<style src="../../assets/less/menu.less"></style>
