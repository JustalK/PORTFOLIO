<template>
	<div id="SLIDE">
		<a>
			<h2>{{ title }}</h2>
		</a>
	</div>
</template>
<script>

export default {
	props: {
		title: {
			type: String,
			required: true
		},
	}
};
</script>
<style src="../assets/less/slide.less"></style>
