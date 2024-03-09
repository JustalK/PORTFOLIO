<template>
	<div id="LOADING" :class="{ invisible: invisible }" v-bind:style="{ 'width': '33%' }" />
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
			href: 'https://github.com/JustalK'
		};
	}
};
</script>
<style src="../../assets/less/loading.less"></style>
