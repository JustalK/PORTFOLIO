<template>
	<div
		:class="props_link.side"
		class="bloc">
		<components_introduction :props_introduction="props_introduction" />
		<components_introduction_link :props_link="props_link" />
	</div>
</template>
<script>
import introduction from './introduction';
import introduction_link from './introduction_link';

export default {
	components: {
		components_introduction: introduction,
		components_introduction_link: introduction_link
	},
	props: {
		props_introduction: {
			type: Object,
			required: true
		},
		props_link: {
			type: Object,
			required: true
		}
	}
};
</script>
<style src="../../assets/less/introduction_side.less"></style>
