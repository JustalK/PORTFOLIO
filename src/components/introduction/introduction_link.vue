<template>
	<a
		:class="props_link.side"
		class="links-open-door"
		@click.stop="open($event, props_link.link)">
		{{ props_link.name }}
	</a>
</template>
<script>
import utils from '../../helper/utils.js';

export default {
	props: {
		props_link: {
			type: Object,
			required: true
		}
	},
	methods: {
		open: function(event, link) {
			const element = event.target;
			utils.add_class_to_element(element, 'active');
			this.$emit(link);
		}
	}
};
</script>
<style src="../../assets/less/introduction_link.less"></style>
