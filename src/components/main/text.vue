<template>
	<span class="text">
		{{ text }}
	</span>
</template>
<script>
export default {
	props: {
		text: {
			type: String,
			required: true
		}
	}
};
</script>
<style src="../../assets/less/text.less"></style>
