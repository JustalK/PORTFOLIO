<template>
	<div>
		<span class="intro">
			<span>Hello world, I'm <a
				href="#">{{ props_introduction.name }}</a>.</span>
			<span>I'm a full stack web developer.</span>
			<span>If any questions, contact me at <a
				href="#">{{ props_introduction.email }}</a></span>
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
	}
};
</script>
<style src="../../assets/less/introduction.less"></style>
